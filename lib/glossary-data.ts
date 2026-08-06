/**
 * Glossary 术语库数据
 *
 * YKI 写作测试相关的专业术语
 * 用于 /glossary 索引页和 /glossary/[slug] 词条详情页
 */

export interface GlossaryTerm {
  /** URL slug */
  slug: string;
  /** 术语名称 */
  title: string;
  /** 术语定义 */
  definition: string;
  /** 相关文章 URL 列表 (必须为已发布文章) */
  relatedArticles: string[];
  /** 搜索关键词 */
  keywords: string[];
  /** 分类 */
  category: 'Exam' | 'Language Level' | 'Linguistics' | 'Scoring' | 'Writing Task';
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'yki-keskitaso',
    title: 'YKI keskitaso',
    definition:
      'YKI keskitaso (intermediate level) is the intermediate tier of the Finnish National Certificate of Language Proficiency (Kansallinen kielitutkinto). It corresponds to CEFR levels B1–B2 and is the most commonly taken YKI exam for citizenship, study, and work purposes.',
    relatedArticles: [
      '/wiki/guides/how-to-improve-finnish-writing-skills-yki-test',
      '/wiki/scoring/yki-b1-guide',
    ],
    keywords: ['yki', 'keskitaso', 'intermediate', 'national certificate', 'language proficiency'],
    category: 'Exam',
  },
  {
    slug: 'b1-finnish-level',
    title: 'B1 Finnish Level',
    definition:
      'B1 is an intermediate CEFR level where a learner can write clear, connected text on familiar topics, describe experiences, and give reasons for opinions. In YKI writing, B1 indicates functional competence with noticeable but non-blocking errors.',
    relatedArticles: [
      '/wiki/templates/yki-b1-vocabulary-list-writing-test',
      '/wiki/scoring/yki-b1-guide',
    ],
    keywords: ['b1', 'cefr', 'intermediate', 'finnish level', 'yki'],
    category: 'Language Level',
  },
  {
    slug: 'b2-finnish-level',
    title: 'B2 Finnish Level',
    definition:
      'B2 is an upper-intermediate CEFR level where a learner can write detailed, well-structured text, discuss abstract topics, and use a wide range of vocabulary with fluency. In YKI writing, B2 indicates strong command of Finnish with minor errors.',
    relatedArticles: [
      '/wiki/templates/yki-b2-vocabulary-list-advanced-finnish-words',
      '/wiki/scoring/yki-opinion-writing-scoring',
    ],
    keywords: ['b2', 'cefr', 'upper-intermediate', 'finnish level', 'advanced'],
    category: 'Language Level',
  },
  {
    slug: 'kirjakieli',
    title: 'Kirjakieli',
    definition:
      'Kirjakieli is the standard written form of Finnish, used in formal writing, literature, news, and official documents. In YKI writing tasks, especially the opinion essay (mielipidekirjoitus), candidates must use kirjakieli rather than puhekieli (spoken language).',
    relatedArticles: [
      '/wiki/guides/how-to-write-an-opinion-text-in-finnish',
      '/wiki/guides/common-finnish-writing-errors-yki-students',
    ],
    keywords: ['kirjakieli', 'standard finnish', 'written language', 'formal'],
    category: 'Linguistics',
  },
  {
    slug: 'puhekieli',
    title: 'Puhekieli',
    definition:
      'Puhekieli is the spoken form of Finnish, used in everyday conversation. It differs significantly from kirjakieli in pronunciation, grammar, and vocabulary. Using puhekieli in formal YKI writing tasks is penalized and lowers the writing score.',
    relatedArticles: [
      '/wiki/guides/common-finnish-writing-errors-yki-students',
      '/wiki/guides/how-to-write-an-opinion-text-in-finnish',
    ],
    keywords: ['puhekieli', 'spoken finnish', 'informal', 'spoken language'],
    category: 'Linguistics',
  },
  {
    slug: 'task-fulfillment',
    title: 'Task Fulfillment',
    definition:
      'Task fulfillment is one of the four YKI writing scoring criteria. It measures whether the candidate addresses all required content points of the prompt, stays on topic, and uses an appropriate register. Missing content points directly lowers the task fulfillment score.',
    relatedArticles: [
      '/wiki/scoring/yki-message-writing-scoring',
      '/wiki/scoring/yki-opinion-writing-scoring',
    ],
    keywords: ['task fulfillment', 'scoring', 'content points', 'register', 'yki'],
    category: 'Scoring',
  },
  {
    slug: 'comprehensibility',
    title: 'Comprehensibility',
    definition:
      'Comprehensibility is a YKI writing scoring criterion that evaluates whether the reader can understand the message without effort. Texts with frequent errors that disrupt communication score lower, while minor errors that do not impede understanding have less impact.',
    relatedArticles: [
      '/wiki/scoring/yki-message-writing-scoring',
      '/wiki/guides/common-finnish-writing-errors-yki-students',
    ],
    keywords: ['comprehensibility', 'scoring', 'clarity', 'communication', 'yki'],
    category: 'Scoring',
  },
  {
    slug: 'mielipidekirjoitus',
    title: 'Mielipidekirjoitus',
    definition:
      'Mielipidekirjoitus is the Finnish term for an opinion essay. It is YKI writing Task 2, where candidates must state and justify an opinion on a given topic in kirjakieli. A strong mielipidekirjoitus follows an introduction-body-conclusion structure.',
    relatedArticles: [
      '/wiki/guides/how-to-write-an-opinion-text-in-finnish',
      '/wiki/guides/yki-opinion-essay-structure',
    ],
    keywords: ['mielipidekirjoitus', 'opinion essay', 'task 2', 'yki writing'],
    category: 'Writing Task',
  },
  {
    slug: 'viesti',
    title: 'Viesti',
    definition:
      'Viesti means "message" in Finnish. In YKI writing, viesti refers to Task 1, where candidates write a short message or email based on a given situation. The expected length is 25–40 words, and the register depends on the prompt.',
    relatedArticles: [
      '/wiki/guides/how-to-write-message-yki',
      '/wiki/templates/yki-message-template',
    ],
    keywords: ['viesti', 'message', 'task 1', 'email', 'yki writing'],
    category: 'Writing Task',
  },
  {
    slug: 'sahkoposti',
    title: 'Sähköposti',
    definition:
      'Sähköposti means "email" in Finnish. In the YKI writing test, sähköposti tasks require candidates to write formal or informal emails using appropriate greetings, closings, and register. The choice of phrases signals the formality level.',
    relatedArticles: [
      '/wiki/templates/finnish-message-phrases-yki',
      '/wiki/guides/yki-message-writing-guide',
    ],
    keywords: ['sähköposti', 'email', 'finnish', 'formal', 'informal'],
    category: 'Writing Task',
  },
];

/** 根据 slug 查找术语 */
export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

/** 获取所有术语 slug (用于 generateStaticParams) */
export function getAllTermSlugs(): string[] {
  return glossaryTerms.map((t) => t.slug);
}
