-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE,
  free_credits_used INTEGER DEFAULT 0,
  is_pro BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Writing submissions table
CREATE TABLE writing_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic_title TEXT,
  user_text TEXT NOT NULL,
  estimated_level TEXT,
  grammar_score INTEGER,
  vocabulary_score INTEGER,
  task_achievement INTEGER,
  task_score INTEGER,
  corrected_text TEXT,
  detailed_feedback JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_writing_submissions_user_id ON writing_submissions(user_id);
CREATE INDEX idx_writing_submissions_created_at ON writing_submissions(created_at);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE writing_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can view their own data"
  ON users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own data"
  ON users FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own data"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- RLS Policies for writing_submissions table
CREATE POLICY "Users can view their own submissions"
  ON writing_submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own submissions"
  ON writing_submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own submissions"
  ON writing_submissions FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own submissions"
  ON writing_submissions FOR DELETE
  USING (auth.uid() = user_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Essay history table (YKI writing checks)
CREATE TABLE essay_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  essay_text TEXT NOT NULL,
  estimated_level TEXT NOT NULL,
  grammar_score INTEGER NOT NULL,
  vocabulary_score INTEGER NOT NULL,
  task_score INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_essay_history_user_id ON essay_history(user_id);
CREATE INDEX idx_essay_history_created_at ON essay_history(created_at DESC);

ALTER TABLE essay_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own essay history"
  ON essay_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own essay history"
  ON essay_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own essay history"
  ON essay_history FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================================
-- Migration: update existing writing_submissions table
-- Run this block ONLY if the table was created with the old
-- schema (missing vocabulary_score / task_achievement, or
-- topic_title was NOT NULL). Safe to run multiple times.
-- ============================================================
ALTER TABLE writing_submissions ALTER COLUMN topic_title DROP NOT NULL;
ALTER TABLE writing_submissions ADD COLUMN IF NOT EXISTS vocabulary_score INTEGER;
ALTER TABLE writing_submissions ADD COLUMN IF NOT EXISTS task_achievement INTEGER;
ALTER TABLE writing_submissions ADD COLUMN IF NOT EXISTS task_score INTEGER;
ALTER TABLE writing_submissions ADD COLUMN IF NOT EXISTS corrected_text TEXT;

-- Allow anonymous users (who have no email) to exist in the users table
ALTER TABLE users ALTER COLUMN email DROP NOT NULL;
