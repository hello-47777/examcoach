'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/utils/supabase';

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  getAccessToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function initializeAuth() {
      const {
        data: { session: existingSession },
      } = await supabase.auth.getSession();

      if (!isMounted) return;

      if (existingSession) {
        setSession(existingSession);
        setUser(existingSession.user);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.signInAnonymously();

      if (!isMounted) return;

      if (error) {
        console.error('Anonymous sign-in failed:', error.message, error);
        setIsLoading(false);
        return;
      }

      console.log('✅ Anonymous user signed in successfully!');
      setSession(data.session);
      setUser(data.user);
      setIsLoading(false);
    }

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const getAccessToken = useCallback(async () => {
    const {
      data: { session: currentSession },
    } = await supabase.auth.getSession();

    return currentSession?.access_token ?? null;
  }, []);

  const value = useMemo(
    () => ({
      user,
      session,
      isLoading,
      getAccessToken,
    }),
    [user, session, isLoading, getAccessToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
