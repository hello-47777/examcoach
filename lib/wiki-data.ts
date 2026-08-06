/**
 * Wiki 数据 - 客户端安全部分
 *
 * 此文件不包含 Node.js API (fs/path),可被 Client Component 安全导入。
 * 服务端文件系统相关函数见 lib/wiki-server.ts
 */

export interface WikiArticle {
  slug: string;
  category: string;
  url: string;
  date: string; // YYYY-MM-DD (发布日期, 北京时间)
  updatedAt?: string; // YYYY-MM-DD (最后更新日期, 缺省时回退到 date)
  title?: string; // 文章标题 (用于搜索和推荐展示)
  keywords?: string[]; // 搜索关键词
  topic?: string; // 文章主题 (用于相关文章推荐)
}

/**
 * 排期文章列表 (手动维护)
 * 新文章在此登记,配合时间锁实现按日期自动发布
 * date 字段为发布日期 (北京时间)
 */
export const scheduledArticles: WikiArticle[] = [
  // 2026.8.04
  {
    slug: 'ai-yki-writing-preparation',
    category: 'guides',
    url: '/wiki/guides/ai-yki-writing-preparation',
    date: '2026-08-04',
    title: 'How AI Can Help You Prepare for the YKI Writing Test',
    keywords: ['ai', 'yki', 'writing', 'preparation', 'ai-assisted'],
    topic: 'ai-writing',
  },
  {
    slug: 'practice-yki-writing-online',
    category: 'guides',
    url: '/wiki/guides/practice-yki-writing-online',
    date: '2026-08-04',
    title: 'Practice YKI Writing Online With AI Feedback',
    keywords: ['practice', 'yki', 'writing', 'online', 'ai feedback'],
    topic: 'ai-writing',
  },
  // 2026.8.05
  {
    slug: 'check-finnish-writing-level-online',
    category: 'guides',
    url: '/wiki/guides/check-finnish-writing-level-online',
    date: '2026-08-05',
    title: 'Check Finnish Writing Level Online With AI Evaluation',
    keywords: ['check', 'finnish', 'writing', 'level', 'online', 'ai'],
    topic: 'ai-writing',
  },
  {
    slug: 'yki-writing-feedback-guide',
    category: 'guides',
    url: '/wiki/guides/yki-writing-feedback-guide',
    date: '2026-08-05',
    title: 'YKI Writing Feedback Guide: Understand Your AI Examiner Report',
    keywords: ['yki', 'writing', 'feedback', 'guide', 'ai examiner'],
    topic: 'ai-writing',
  },
  // 2026.8.06
  {
    slug: 'how-to-write-message-yki',
    category: 'guides',
    url: '/wiki/guides/how-to-write-message-yki',
    date: '2026-08-06',
    title: 'How to Write a Message for YKI Writing Test',
    keywords: ['how to', 'write', 'message', 'yki', 'writing test'],
    topic: 'message-writing',
  },
  {
    slug: 'yki-message-writing-guide',
    category: 'guides',
    url: '/wiki/guides/yki-message-writing-guide',
    date: '2026-08-06',
    title: 'YKI Message Writing Guide: How to Write Short Messages in Finnish',
    keywords: ['yki', 'message', 'writing', 'guide', 'finnish', 'short message'],
    topic: 'message-writing',
  },
  // 2026.8.07
  {
    slug: 'yki-message-template',
    category: 'templates',
    url: '/wiki/templates/yki-message-template',
    date: '2026-08-07',
    title: 'YKI Message Template: Finnish Short Message Structures',
    keywords: ['yki', 'message', 'template', 'finnish', 'structure'],
    topic: 'message-writing',
  },
  {
    slug: 'yki-message-writing-examples',
    category: 'essays',
    url: '/wiki/essays/yki-message-writing-examples',
    date: '2026-08-07',
    title: 'YKI Message Writing Examples: Finnish Sample Answers Explained',
    keywords: ['yki', 'message', 'writing', 'examples', 'sample', 'finnish'],
    topic: 'message-writing',
  },
  // 2026.8.08
  {
    slug: 'finnish-message-phrases-yki',
    category: 'templates',
    url: '/wiki/templates/finnish-message-phrases-yki',
    date: '2026-08-08',
    title: 'Finnish Message Phrases for YKI Writing Test',
    keywords: ['finnish', 'message', 'phrases', 'yki', 'writing'],
    topic: 'message-writing',
  },
  // 2026.8.09
  {
    slug: 'yki-message-writing-mistakes',
    category: 'guides',
    url: '/wiki/guides/yki-message-writing-mistakes',
    date: '2026-08-09',
    title: 'Common YKI Message Writing Mistakes Students Make',
    keywords: ['yki', 'message', 'writing', 'mistakes', 'common'],
    topic: 'message-writing',
  },
  {
    slug: 'yki-message-writing-scoring',
    category: 'scoring',
    url: '/wiki/scoring/yki-message-writing-scoring',
    date: '2026-08-09',
    title: 'YKI Message Writing Scoring: How Examiners Evaluate Messages',
    keywords: ['yki', 'message', 'writing', 'scoring', 'examiners'],
    topic: 'message-writing',
  },
  // 2026.8.10
  {
    slug: 'yki-speaking-examples',
    category: 'essays',
    url: '/wiki/essays/yki-speaking-examples',
    date: '2026-08-10',
    title: 'YKI Speaking Examples: Finnish Speaking Answers for B1-B2',
    keywords: ['yki', 'speaking', 'examples', 'finnish', 'b1', 'b2'],
    topic: 'speaking',
  },
  {
    slug: 'yki-writing-task-3',
    category: 'guides',
    url: '/wiki/guides/yki-writing-task-3',
    date: '2026-08-10',
    title: 'YKI Writing Task 3 Explained: Complete Message Preparation Guide',
    keywords: ['yki', 'writing', 'task 3', 'message', 'preparation'],
    topic: 'message-writing',
  },
  // 2026.7.28
  {
    slug: 'how-to-write-an-opinion-text-in-finnish',
    category: 'guides',
    url: '/wiki/guides/how-to-write-an-opinion-text-in-finnish',
    date: '2026-07-28',
    title: 'How to Write an Opinion Text in Finnish: YKI Writing Task 2 Strategy',
    keywords: ['how to', 'write', 'opinion', 'text', 'finnish', 'yki', 'task 2'],
    topic: 'opinion-writing',
  },
  {
    slug: 'yki-opinion-essay-structure',
    category: 'guides',
    url: '/wiki/guides/yki-opinion-essay-structure',
    date: '2026-07-28',
    title: 'YKI Opinion Essay Structure: B1-B2 Writing Framework Explained',
    keywords: ['yki', 'opinion', 'essay', 'structure', 'b1', 'b2', 'framework'],
    topic: 'opinion-writing',
  },
  {
    slug: 'yki-opinion-essay-templates',
    category: 'templates',
    url: '/wiki/templates/yki-opinion-essay-templates',
    date: '2026-07-29',
    title: 'YKI Opinion Essay Templates: Finnish Writing Frameworks for B1-B2',
    keywords: ['yki', 'opinion', 'essay', 'templates', 'finnish', 'b1', 'b2'],
    topic: 'opinion-writing',
  },
  {
    slug: 'yki-opinion-writing-examples',
    category: 'essays',
    url: '/wiki/essays/yki-opinion-writing-examples',
    date: '2026-07-29',
    title: 'YKI Opinion Writing Examples: Finnish B1-B2 Sample Essays',
    keywords: ['yki', 'opinion', 'writing', 'examples', 'finnish', 'sample', 'b1', 'b2'],
    topic: 'opinion-writing',
  },
  {
    slug: 'finnish-opinion-writing-phrases',
    category: 'templates',
    url: '/wiki/templates/finnish-opinion-writing-phrases',
    date: '2026-07-30',
    title: 'Finnish Opinion Writing Phrases for YKI Exam Success',
    keywords: ['finnish', 'opinion', 'writing', 'phrases', 'yki', 'exam'],
    topic: 'opinion-writing',
  },
  {
    slug: 'yki-opinion-writing-scoring',
    category: 'scoring',
    url: '/wiki/scoring/yki-opinion-writing-scoring',
    date: '2026-07-30',
    title: 'YKI Opinion Writing Scoring: How Examiners Grade Your Essay',
    keywords: ['yki', 'opinion', 'writing', 'scoring', 'examiners', 'grade'],
    topic: 'opinion-writing',
  },
  {
    slug: 'common-yki-opinion-writing-mistakes',
    category: 'guides',
    url: '/wiki/guides/common-yki-opinion-writing-mistakes',
    date: '2026-07-31',
    title: 'Common YKI Opinion Writing Mistakes and How to Avoid Them',
    keywords: ['common', 'yki', 'opinion', 'writing', 'mistakes', 'avoid'],
    topic: 'opinion-writing',
  },
  {
    slug: 'yki-b1-vocabulary-list-writing-test',
    category: 'templates',
    url: '/wiki/templates/yki-b1-vocabulary-list-writing-test',
    date: '2026-07-31',
    title: 'YKI B1 Vocabulary List: Essential Finnish Words for Writing Test',
    keywords: ['yki', 'b1', 'vocabulary', 'list', 'finnish', 'words', 'writing'],
    topic: 'vocabulary',
  },
  {
    slug: 'finnish-connectors-for-writing',
    category: 'templates',
    url: '/wiki/templates/finnish-connectors-for-writing',
    date: '2026-08-01',
    title: 'Finnish Connectors for Writing: Improve Your YKI Essay Flow',
    keywords: ['finnish', 'connectors', 'writing', 'yki', 'essay', 'flow'],
    topic: 'vocabulary',
  },
  {
    slug: 'yki-b2-vocabulary-list-advanced-finnish-words',
    category: 'templates',
    url: '/wiki/templates/yki-b2-vocabulary-list-advanced-finnish-words',
    date: '2026-08-01',
    title: 'YKI B2 Vocabulary List: Advanced Finnish Words for Writing',
    keywords: ['yki', 'b2', 'vocabulary', 'list', 'advanced', 'finnish', 'words'],
    topic: 'vocabulary',
  },
  {
    slug: 'common-finnish-writing-errors-yki-students',
    category: 'guides',
    url: '/wiki/guides/common-finnish-writing-errors-yki-students',
    date: '2026-08-02',
    title: 'Common Finnish Writing Errors YKI Students Should Avoid',
    keywords: ['common', 'finnish', 'writing', 'errors', 'yki', 'students'],
    topic: 'writing-errors',
  },
  {
    slug: 'finnish-writing-transition-words-yki-exam',
    category: 'templates',
    url: '/wiki/templates/finnish-writing-transition-words-yki-exam',
    date: '2026-08-02',
    title: 'Finnish Writing Transition Words for YKI Exam',
    keywords: ['finnish', 'writing', 'transition', 'words', 'yki', 'exam'],
    topic: 'vocabulary',
  },
  {
    slug: 'ai-yki-writing-checker',
    category: 'guides',
    url: '/wiki/guides/ai-yki-writing-checker',
    date: '2026-08-03',
    title: 'AI YKI Writing Checker: Check Your Finnish Writing Level Instantly',
    keywords: ['ai', 'yki', 'writing', 'checker', 'finnish', 'level', 'online'],
    topic: 'ai-writing',
  },
  {
    slug: 'how-to-improve-finnish-writing-skills-yki-test',
    category: 'guides',
    url: '/wiki/guides/how-to-improve-finnish-writing-skills-yki-test',
    date: '2026-08-03',
    title: 'How to Improve Finnish Writing Skills for YKI Test',
    keywords: ['how to', 'improve', 'finnish', 'writing', 'skills', 'yki', 'test'],
    topic: 'writing-skills',
  },
];
