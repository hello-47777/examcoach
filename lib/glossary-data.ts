/**
 * Glossary 术语库数据
 *
 * YKI 写作测试相关的专业术语
 * 用于 /glossary 索引页和 /glossary/[slug] 词条详情页
 *
 * 每个词条遵循 TASK 14 页面标准:
 * - Definition: 简洁准确的定义
 * - Meaning in English: 英文含义
 * - Meaning in Finnish: Finnish 对应术语 (如适用)
 * - Why It Matters for YKI: 与 YKI 考试的关系
 * - Example: 真实简洁的例子
 * - Related Topics: 相关 Topic Hub (双向链接)
 * - Related Articles: 相关 Wiki 文章 (已发布)
 */

export interface GlossaryFAQ {
  question: string;
  answer: string;
}

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
  /** 英文含义解释 (TASK 14) */
  meaningInEnglish?: string;
  /** Finnish 对应术语 (TASK 14, 如适用) */
  meaningInFinnish?: string;
  /** 与 YKI 的关系 (TASK 14) */
  whyItMatters?: string;
  /** 真实简洁的例子 (TASK 14) */
  example?: string;
  /** 相关 Topic Hub slugs (TASK 16, 双向链接, 如 'yki-email-writing') */
  relatedTopics?: string[];
  /** 常见问题 (TASK 14-15, 可选, 不虚构) */
  faq?: GlossaryFAQ[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // ==================== Exam (YKI Core) ====================
  {
    slug: 'yki',
    title: 'YKI',
    definition:
      'YKI (Kansallinen kielitutkinto) is the Finnish National Certificate of Language Proficiency. It is the official state-recognized language proficiency test for Finnish (and Swedish) used for citizenship, university admission, and professional registration in Finland.',
    relatedArticles: [
      '/wiki/guides/how-to-pass-yki-test',
      '/wiki/guides/finnish-language-test-citizenship',
    ],
    keywords: ['yki', 'national certificate', 'finnish language test', 'kielitutkinto'],
    category: 'Exam',
    meaningInEnglish:
      'YKI stands for the National Certificate of Language Proficiency, Finland\u2019s official language exam system.',
    meaningInFinnish: 'Kansallinen kielitutkinto (YKI-tutkinto)',
    whyItMatters:
      'YKI is the most widely accepted proof of Finnish language proficiency in Finland. Citizenship applications typically require YKI level 3 (B1), and many universities and employers require level 4 (B2) or higher.',
    example:
      'A citizenship applicant takes the YKI intermediate (keskitaso) exam and receives a level 3 result in writing, satisfying the language requirement.',
    relatedTopics: ['yki-writing-skills'],
  },
  {
    slug: 'yki-test',
    title: 'YKI Test',
    definition:
      'The YKI test evaluates Finnish or Swedish proficiency across four skills: speaking, writing, listening, and reading. Each skill is assessed independently and assigned a YKI level (1\u20136) corresponding to CEFR levels A1\u2013C2.',
    relatedArticles: [
      '/wiki/guides/how-to-pass-yki-test',
      '/wiki/guides/yki-test-preparation-plan',
    ],
    keywords: ['yki test', 'finnish proficiency test', 'yki exam', 'language exam finland'],
    category: 'Exam',
    meaningInEnglish:
      'The YKI test is Finland\u2019s official language proficiency exam covering all four language skills.',
    meaningInFinnish: 'YKI-tutkinto',
    whyItMatters:
      'Each skill receives its own level, so a candidate can have different levels in writing and speaking. Universities and authorities look at the writing level separately for tasks that require written Finnish.',
    example:
      'A candidate scores level 4 (B2) in writing but level 3 (B1) in speaking, demonstrating stronger written than spoken Finnish.',
    relatedTopics: ['yki-writing-skills', 'yki-ai-writing'],
  },
  {
    slug: 'yki-keskitaso',
    title: 'YKI keskitaso',
    definition:
      'YKI keskitaso (intermediate level) is the intermediate tier of the Finnish National Certificate of Language Proficiency (Kansallinen kielitutkinto). It corresponds to CEFR levels B1\u2013B2 and is the most commonly taken YKI exam for citizenship, study, and work purposes.',
    relatedArticles: [
      '/wiki/guides/how-to-improve-finnish-writing-skills-yki-test',
      '/wiki/scoring/yki-b1-guide',
    ],
    keywords: ['yki', 'keskitaso', 'intermediate', 'national certificate', 'language proficiency'],
    category: 'Exam',
    meaningInEnglish:
      'YKI keskitaso means the intermediate-level YKI exam, targeting B1\u2013B2 proficiency.',
    meaningInFinnish: 'Keskitaso (keskitason kielitutkinto)',
    whyItMatters:
      'The keskitaso is the exam most citizenship and university applicants take. A level 3 (B1) result in writing meets the citizenship requirement, while level 4 (B2) is often needed for academic study.',
    example:
      'A candidate registering for citizenship takes the YKI keskitaso exam and needs at least level 3 in writing.',
    relatedTopics: ['yki-writing-skills'],
  },
  {
    slug: 'yki-level-3',
    title: 'YKI Level 3',
    definition:
      'YKI Level 3 corresponds to CEFR level B1. In writing, it indicates that the candidate can produce clear, connected text on familiar topics, describe experiences, and give reasons for opinions, with some errors that do not block communication.',
    relatedArticles: [
      '/wiki/guides/pass-yki-writing-level-3',
      '/wiki/scoring/yki-level-3-vs-level-4',
      '/wiki/scoring/yki-b1-guide',
    ],
    keywords: ['yki level 3', 'b1', 'yki writing level', 'intermediate finnish'],
    category: 'Exam',
    meaningInEnglish:
      'YKI Level 3 is an intermediate proficiency level equivalent to CEFR B1.',
    meaningInFinnish: 'Taitotaso 3',
    whyItMatters:
      'Level 3 is the minimum writing level required for Finnish citizenship. It demonstrates functional written Finnish for everyday situations.',
    example:
      'A level 3 writer can write a clear job application email and a short opinion text, though with some grammar errors that do not impede understanding.',
    relatedTopics: ['yki-writing-skills', 'yki-email-writing'],
  },
  {
    slug: 'yki-level-4',
    title: 'YKI Level 4',
    definition:
      'YKI Level 4 corresponds to CEFR level B2. In writing, it indicates that the candidate can produce detailed, well-structured text, discuss abstract topics, and use a wide range of vocabulary with fluency, with only minor errors.',
    relatedArticles: [
      '/wiki/guides/how-to-get-yki-writing-level-4',
      '/wiki/scoring/yki-level-3-vs-level-4',
      '/wiki/essays/yki-writing-level-4-examples',
    ],
    keywords: ['yki level 4', 'b2', 'yki writing level', 'upper-intermediate finnish'],
    category: 'Exam',
    meaningInEnglish:
      'YKI Level 4 is an upper-intermediate proficiency level equivalent to CEFR B2.',
    meaningInFinnish: 'Taitotaso 4',
    whyItMatters:
      'Level 4 is often required for university admission and many professional roles. It shows the candidate can handle complex written Finnish with confidence.',
    example:
      'A level 4 writer can produce a well-argued opinion essay with varied connectors and accurate kirjakieli, making only occasional minor errors.',
    relatedTopics: ['yki-opinion-writing', 'yki-writing-skills'],
  },
  {
    slug: 'yki-writing-test',
    title: 'YKI Writing Test',
    definition:
      'The YKI writing test (kirjoittaminen) is the written component of the National Certificate of Language Proficiency. It evaluates a candidate\u2019s ability to write Finnish in practical situations through structured writing tasks, typically lasting about 55 minutes.',
    relatedArticles: [
      '/wiki/guides/yki-writing-test-checklist',
      '/wiki/guides/yki-writing-practice',
      '/wiki/guides/yki-writing-topics',
    ],
    keywords: ['yki writing test', 'finnish writing exam', 'yki kirjoittaminen', 'writing test'],
    category: 'Exam',
    meaningInEnglish:
      'The YKI writing test is the written Finnish proficiency component of the national language exam.',
    meaningInFinnish: 'YKI-kirjoittaminen',
    whyItMatters:
      'The writing test is graded separately from other skills. A strong writing score is essential for citizenship, study, and jobs that require written Finnish communication.',
    example:
      'The YKI writing test includes a message task (Task 1) and an opinion essay (Task 2), both written in kirjakieli.',
    relatedTopics: ['yki-email-writing', 'yki-opinion-writing', 'yki-writing-skills'],
    faq: [
      {
        question: 'How long is the YKI writing test?',
        answer:
          'The YKI writing sub-test takes approximately 55 minutes, covering all writing tasks. Candidates should allocate roughly 15\u201320 minutes per task and reserve time for review.',
      },
    ],
  },

  // ==================== Writing Task ====================
  {
    slug: 'mielipidekirjoitus',
    title: 'Mielipidekirjoitus',
    definition:
      'Mielipidekirjoitus is the Finnish term for an opinion essay. It is YKI writing Task 2, where candidates must state and justify an opinion on a given topic in kirjakieli. A strong mielipidekirjoitus follows an introduction-body-conclusion structure.',
    relatedArticles: [
      '/wiki/guides/how-to-write-an-opinion-text-in-finnish',
      '/wiki/guides/yki-opinion-essay-structure',
      '/wiki/essays/yki-opinion-writing-examples',
    ],
    keywords: ['mielipidekirjoitus', 'opinion essay', 'task 2', 'yki writing'],
    category: 'Writing Task',
    meaningInEnglish: 'Mielipidekirjoitus means opinion essay or opinion piece.',
    meaningInFinnish: 'Mielipidekirjoitus',
    whyItMatters:
      'Task 2 is the longest and highest-weighted YKI writing task. Using kirjakieli and a clear argument structure is essential to score at B1 or B2.',
    example:
      'A mielipidekirjoitus prompt asks whether cities should ban cars in the center; the candidate states a position, gives two reasons, and concludes.',
    relatedTopics: ['yki-opinion-writing'],
  },
  {
    slug: 'viesti',
    title: 'Viesti',
    definition:
      'Viesti means "message" in Finnish. In YKI writing, viesti refers to Task 1, where candidates write a short message or email based on a given situation. The expected length is 25\u201340 words, and the register depends on the prompt.',
    relatedArticles: [
      '/wiki/guides/how-to-write-message-yki',
      '/wiki/templates/yki-message-template',
      '/wiki/guides/yki-message-writing-guide',
    ],
    keywords: ['viesti', 'message', 'task 1', 'email', 'yki writing'],
    category: 'Writing Task',
    meaningInEnglish: 'Viesti means message or communication.',
    meaningInFinnish: 'Viesti',
    whyItMatters:
      'Task 1 tests practical written Finnish for everyday and workplace situations. Choosing the correct register (formal vs. informal) is a key scoring factor.',
    example:
      'A viesti prompt asks the candidate to write a message to a friend confirming a meeting time and apologizing for being late.',
    relatedTopics: ['yki-email-writing'],
  },
  {
    slug: 'sahkoposti',
    title: 'S\u00e4hk\u00f6posti',
    definition:
      'S\u00e4hk\u00f6posti means "email" in Finnish. In the YKI writing test, s\u00e4hk\u00f6posti tasks require candidates to write formal or informal emails using appropriate greetings, closings, and register. The choice of phrases signals the formality level.',
    relatedArticles: [
      '/wiki/templates/finnish-message-phrases-yki',
      '/wiki/guides/yki-message-writing-guide',
      '/wiki/emails/formal-email',
    ],
    keywords: ['s\u00e4hk\u00f6posti', 'email', 'finnish', 'formal', 'informal'],
    category: 'Writing Task',
    meaningInEnglish: 'S\u00e4hk\u00f6posti means email (literally "electric mail").',
    meaningInFinnish: 'S\u00e4hk\u00f6posti',
    whyItMatters:
      'Many YKI Task 1 prompts are email scenarios. Using the correct greeting (e.g., "Hei" vs. "Hyv\u00e4 vastaanottaja") and closing directly affects the task fulfillment and register scores.',
    example:
      'A formal s\u00e4hk\u00f6posti to a landlord starts with "Hyv\u00e4 vastaanottaja," states the purpose, and ends with "Yst\u00e4v\u00e4llisin terveisin."',
    relatedTopics: ['yki-email-writing'],
  },
  {
    slug: 'yki-writing-task',
    title: 'YKI Writing Task',
    definition:
      'A YKI writing task is a structured writing assignment in the YKI writing test. The intermediate exam typically includes Task 1 (a message or email, viesti/s\u00e4hk\u00f6posti) and Task 2 (an opinion essay, mielipidekirjoitus), each testing different skills and registers.',
    relatedArticles: [
      '/wiki/guides/yki-writing-task-3',
      '/wiki/guides/how-to-write-message-yki',
      '/wiki/guides/yki-opinion-essay-structure',
    ],
    keywords: ['yki writing task', 'task 1', 'task 2', 'writing assignment', 'yki'],
    category: 'Writing Task',
    meaningInEnglish:
      'A YKI writing task is one of the timed writing assignments in the YKI writing sub-test.',
    meaningInFinnish: 'YKI-kirjoitusteht\u00e4v\u00e4',
    whyItMatters:
      'Each task has its own scoring criteria and register requirements. Understanding the task type determines whether you write formally or informally and how you structure the response.',
    example:
      'Task 1 asks for a 30-word message to a colleague; Task 2 asks for a 120-word opinion essay on a social topic.',
    relatedTopics: ['yki-email-writing', 'yki-opinion-writing'],
  },
  {
    slug: 'yki-writing-prompt',
    title: 'YKI Writing Prompt',
    definition:
      'A YKI writing prompt is the scenario or question given to candidates in the writing test. It defines the task type, situation, required content points, and expected register (formal or informal). Reading all content points carefully is essential for task fulfillment.',
    relatedArticles: [
      '/wiki/guides/yki-writing-topics',
      '/wiki/guides/yki-exam-tips',
    ],
    keywords: ['yki writing prompt', 'writing topic', 'yki prompt', 'writing task question'],
    category: 'Writing Task',
    meaningInEnglish:
      'A YKI writing prompt is the instruction and scenario that the candidate must respond to in writing.',
    meaningInFinnish: 'Kirjoitusteht\u00e4v\u00e4n ohje',
    whyItMatters:
      'Missing content points from the prompt is the most common reason candidates lose task fulfillment points. Reading the prompt carefully and checking off each required element before submitting is critical.',
    example:
      'A prompt asks you to write to a teacher explaining why you missed class, requesting notes, and proposing how to catch up \u2014 three content points that must all be addressed.',
    relatedTopics: ['yki-email-writing', 'yki-opinion-writing'],
  },
  {
    slug: 'finnish-writing',
    title: 'Finnish Writing',
    definition:
      'Finnish writing refers to producing written Finnish text, primarily in kirjakieli (standard written Finnish). For YKI, it covers practical writing tasks: messages, emails, essays, and reports that demonstrate vocabulary range, structural accuracy, and appropriate register.',
    relatedArticles: [
      '/wiki/guides/how-to-improve-finnish-writing-skills-yki-test',
      '/wiki/guides/common-finnish-writing-errors-yki-students',
      '/wiki/guides/kirjakieli-vs-puhekieli',
    ],
    keywords: ['finnish writing', 'writing in finnish', 'suomi kirjoittaminen', 'written finnish'],
    category: 'Writing Task',
    meaningInEnglish:
      'Finnish writing is the practice of producing written text in the Finnish language.',
    meaningInFinnish: 'Suomen kirjoittaminen',
    whyItMatters:
      'Written Finnish differs significantly from spoken Finnish (puhekieli). YKI candidates must demonstrate command of kirjakieli, which is learned through deliberate practice rather than everyday conversation.',
    example:
      'Writing "Min\u00e4 en tied\u00e4" (kirjakieli) instead of "M\u00e4 en tied\u00e4" (puhekieli) in a YKI essay is the difference between correct and penalized Finnish.',
    relatedTopics: ['yki-writing-skills', 'yki-writing-errors'],
  },
  {
    slug: 'finnish-essay',
    title: 'Finnish Essay',
    definition:
      'A Finnish essay in the YKI context is a structured opinion text (mielipidekirjoitus) written in kirjakieli. It follows an introduction-body-conclusion structure, uses connectors for coherence, and typically runs 100\u2013150 words at the intermediate level.',
    relatedArticles: [
      '/wiki/guides/yki-opinion-essay-structure',
      '/wiki/essays/yki-opinion-writing-examples',
      '/wiki/templates/yki-opinion-essay-templates',
    ],
    keywords: ['finnish essay', 'opinion essay', 'mielipidekirjoitus', 'essay structure'],
    category: 'Writing Task',
    meaningInEnglish:
      'A Finnish essay is a structured written composition, typically an opinion text in the YKI exam.',
    meaningInFinnish: 'Essee / Mielipidekirjoitus',
    whyItMatters:
      'The essay is the highest-weighted YKI writing task. A clear structure with connectors and kirjakieli is what separates a B1 essay from a B2 essay.',
    example:
      'A Finnish essay opens with a position statement, develops two arguments with examples, uses "ensinn\u00e4" and "toiseksi," and concludes with "yhteenvetona."',
    relatedTopics: ['yki-opinion-writing'],
  },
  {
    slug: 'informal-email',
    title: 'Informal Email',
    definition:
      'An informal email in YKI writing is a message written to a friend, family member, or close colleague. It uses informal greetings (e.g., "Hei" or "Moi"), first-name address, and everyday vocabulary. The register is casual but still written in understandable Finnish.',
    relatedArticles: [
      '/wiki/emails/informal-email',
      '/wiki/guides/how-to-write-informal-email',
      '/wiki/guides/informal-email-mistakes',
    ],
    keywords: ['informal email', 'casual email', 'finnish email', 'yki message', 'task 1'],
    category: 'Writing Task',
    meaningInEnglish:
      'An informal email is a friendly, casual written message to someone you know well.',
    meaningInFinnish: 'Ep\u00e4virallinen s\u00e4hk\u00f6posti / tuttavallinen viesti',
    whyItMatters:
      'Choosing an informal register when the prompt expects one is part of task fulfillment. Using overly formal language with a friend is inappropriate; using too casual language in a formal context loses points.',
    example:
      'An informal email starts with "Hei Matti," uses "mit\u00e4 kuuluu," and ends with "N\u00e4hd\u00e4\u00e4n pian, terveisin Anna."',
    relatedTopics: ['yki-email-writing'],
  },
  {
    slug: 'formal-email',
    title: 'Formal Email',
    definition:
      'A formal email in YKI writing is a message written to an official recipient such as a landlord, employer, or authority. It uses formal greetings (e.g., "Hyv\u00e4 vastaanottaja" or "Hei"), polite phrasing, and full kirjakieli register throughout.',
    relatedArticles: [
      '/wiki/emails/formal-email',
      '/wiki/guides/formal-job-application',
      '/wiki/emails/job-application',
    ],
    keywords: ['formal email', 'business email', 'finnish formal email', 'virallinen s\u00e4hk\u00f6posti'],
    category: 'Writing Task',
    meaningInEnglish:
      'A formal email is a polite, official written message to someone you do not know well.',
    meaningInFinnish: 'Virallinen s\u00e4hk\u00f6posti',
    whyItMatters:
      'Many YKI Task 1 prompts are formal scenarios (job applications, complaints, official requests). Using the correct formal register and polite closing is essential for a high task fulfillment score.',
    example:
      'A formal email opens with "Hyv\u00e4 vastaanottaja," states the purpose politely, and closes with "Yst\u00e4v\u00e4llisin terveisin, Anna Virtanen."',
    relatedTopics: ['yki-email-writing'],
  },
  {
    slug: 'finnish-text-structure',
    title: 'Finnish Text Structure',
    definition:
      'Finnish text structure in YKI writing refers to how a text is organized: an introduction that states the purpose or position, body paragraphs that develop the content, and a conclusion that wraps up. Connectors and transition words link the parts coherently.',
    relatedArticles: [
      '/wiki/guides/yki-opinion-essay-structure',
      '/wiki/templates/finnish-connectors-for-writing',
      '/wiki/templates/finnish-writing-transition-words-yki-exam',
    ],
    keywords: ['finnish text structure', 'essay structure', 'text organization', 'connectors'],
    category: 'Writing Task',
    meaningInEnglish:
      'Finnish text structure is the logical organization of a written Finnish text from introduction to conclusion.',
    meaningInFinnish: 'Tekstin rakenne',
    whyItMatters:
      'A clear structure is what makes a text comprehensible and is directly scored under the comprehensibility and structural accuracy criteria. Disorganized writing cannot score above B1.',
    example:
      'A well-structured opinion text: introduction with thesis, two body paragraphs each with one argument, conclusion restating the position, all linked by "ensinn\u00e4," "toiseksi," "lis\u00e4ksi," "yhteenvetona."',
    relatedTopics: ['yki-opinion-writing', 'yki-vocabulary'],
  },

  // ==================== Language Level (CEFR / Levels) ====================
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
    meaningInEnglish:
      'B1 is the CEFR intermediate level, equivalent to YKI level 3.',
    meaningInFinnish: 'Taitotaso 3 (B1)',
    whyItMatters:
      'B1 (YKI level 3) is the minimum writing level required for Finnish citizenship. It proves the candidate can handle everyday written Finnish.',
    example:
      'A B1 writer can draft a clear complaint email and a simple opinion text, though with some grammar and vocabulary limitations.',
    relatedTopics: ['yki-writing-skills'],
  },
  {
    slug: 'b2-finnish-level',
    title: 'B2 Finnish Level',
    definition:
      'B2 is an upper-intermediate CEFR level where a learner can write detailed, well-structured text, discuss abstract topics, and use a wide range of vocabulary with fluency. In YKI writing, B2 indicates strong command of Finnish with minor errors.',
    relatedArticles: [
      '/wiki/templates/yki-b2-vocabulary-list-advanced-finnish-words',
      '/wiki/scoring/yki-opinion-writing-scoring',
      '/wiki/scoring/yki-level-3-vs-level-4',
    ],
    keywords: ['b2', 'cefr', 'upper-intermediate', 'finnish level', 'advanced'],
    category: 'Language Level',
    meaningInEnglish:
      'B2 is the CEFR upper-intermediate level, equivalent to YKI level 4.',
    meaningInFinnish: 'Taitotaso 4 (B2)',
    whyItMatters:
      'B2 (YKI level 4) is often required for university admission and professional positions. It demonstrates the candidate can write complex, fluent Finnish with only minor errors.',
    example:
      'A B2 writer produces a well-argued essay with varied vocabulary, accurate kirjakieli, and smooth use of connectors.',
    relatedTopics: ['yki-writing-skills', 'yki-opinion-writing'],
  },
  {
    slug: 'cefr',
    title: 'CEFR',
    definition:
      'CEFR (Common European Framework of Reference for Languages) is an international standard for describing language proficiency on a six-level scale from A1 (beginner) to C2 (mastery). YKI levels 1\u20136 map directly onto CEFR levels A1\u2013C2.',
    relatedArticles: [
      '/wiki/guides/check-finnish-writing-level-online',
      '/wiki/scoring/yki-level-3-vs-level-4',
    ],
    keywords: ['cefr', 'common european framework', 'language levels', 'a1 b1 b2'],
    category: 'Language Level',
    meaningInEnglish:
      'CEFR is the Common European Framework of Reference for Languages, the standard scale for language proficiency in Europe.',
    meaningInFinnish: 'CEFR (Yhteiseurooppalainen viitekehys)',
    whyItMatters:
      'CEFR is the scale YKI uses to report results. Understanding whether your target is B1 (level 3) or B2 (level 4) determines how you prepare and which score you need.',
    example:
      'A YKI keskitaso writing result of level 3 is reported as B1 on the CEFR scale, satisfying the citizenship language requirement.',
    relatedTopics: ['yki-writing-skills', 'yki-ai-writing'],
  },
  {
    slug: 'finnish-language-proficiency',
    title: 'Finnish Language Proficiency',
    definition:
      'Finnish language proficiency is a learner\u2019s overall ability to use Finnish across speaking, writing, listening, and reading. It is formally measured by the YKI test and reported as a level (1\u20136) or CEFR grade (A1\u2013C2) for each skill.',
    relatedArticles: [
      '/wiki/guides/check-finnish-writing-level-online',
      '/wiki/guides/how-to-improve-finnish-writing-skills-yki-test',
      '/wiki/guides/finnish-language-test-citizenship',
    ],
    keywords: ['finnish language proficiency', 'finnish level', 'language proficiency', 'yki level'],
    category: 'Language Level',
    meaningInEnglish:
      'Finnish language proficiency is the measurable ability to use Finnish across all four skills.',
    meaningInFinnish: 'Suomen kielitaito',
    whyItMatters:
      'Finnish proficiency is a legal requirement for citizenship and a practical requirement for study and work. The YKI test is the official way to certify it.',
    example:
      'A citizenship applicant demonstrates Finnish language proficiency by scoring YKI level 3 (B1) or higher in the required skills.',
    relatedTopics: ['yki-writing-skills', 'yki-ai-writing'],
  },

  // ==================== Linguistics (Finnish Language) ====================
  {
    slug: 'kirjakieli',
    title: 'Kirjakieli',
    definition:
      'Kirjakieli is the standard written form of Finnish, used in formal writing, literature, news, and official documents. In YKI writing tasks, especially the opinion essay (mielipidekirjoitus), candidates must use kirjakieli rather than puhekieli (spoken language).',
    relatedArticles: [
      '/wiki/guides/how-to-write-an-opinion-text-in-finnish',
      '/wiki/guides/common-finnish-writing-errors-yki-students',
      '/wiki/guides/kirjakieli-vs-puhekieli',
    ],
    keywords: ['kirjakieli', 'standard finnish', 'written language', 'formal'],
    category: 'Linguistics',
    meaningInEnglish:
      'Kirjakieli means "book language" or standard written Finnish.',
    meaningInFinnish: 'Kirjakieli',
    whyItMatters:
      'Using kirjakieli is mandatory in YKI formal writing tasks. Mixing in puhekieli forms is one of the most common errors that lower the structural accuracy score.',
    example:
      'In kirjakieli you write "Min\u00e4 en tied\u00e4" instead of the puhekieli "M\u00e4 en tied\u00e4."',
    relatedTopics: ['yki-opinion-writing', 'yki-writing-errors'],
  },
  {
    slug: 'puhekieli',
    title: 'Puhekieli',
    definition:
      'Puhekieli is the spoken form of Finnish, used in everyday conversation. It differs significantly from kirjakieli in pronunciation, grammar, and vocabulary. Using puhekieli in formal YKI writing tasks is penalized and lowers the writing score.',
    relatedArticles: [
      '/wiki/guides/common-finnish-writing-errors-yki-students',
      '/wiki/guides/how-to-write-an-opinion-text-in-finnish',
      '/wiki/guides/kirjakieli-vs-puhekieli',
    ],
    keywords: ['puhekieli', 'spoken finnish', 'informal', 'spoken language'],
    category: 'Linguistics',
    meaningInEnglish:
      'Puhekieli means "speech language" or spoken Finnish.',
    meaningInFinnish: 'Puhekieli',
    whyItMatters:
      'Puhekieli is natural in conversation but inappropriate in YKI formal writing. Candidates who learned Finnish mainly by speaking must consciously switch to kirjakieli for the exam.',
    example:
      'Puhekieli uses "M\u00e4" for "I" and "s\u00f6isin" for conditional, while kirjakieli uses "Min\u00e4" and "s\u00f6isin" with full forms.',
    relatedTopics: ['yki-writing-errors', 'yki-opinion-writing'],
  },
  {
    slug: 'yleiskieli',
    title: 'Yleiskieli',
    definition:
      'Yleiskieli is the standard, generalized form of Finnish taught in schools and used in official contexts. It is closely related to kirjakieli (written standard) but refers more broadly to the accepted standard variety that both writing and formal speech follow.',
    relatedArticles: [
      '/wiki/guides/kirjakieli-vs-puhekieli',
      '/wiki/guides/common-finnish-writing-errors-yki-students',
    ],
    keywords: ['yleiskieli', 'standard finnish', 'general language', 'kirjakieli'],
    category: 'Linguistics',
    meaningInEnglish:
      'Yleiskieli means "general language" or the standard variety of Finnish.',
    meaningInFinnish: 'Yleiskieli',
    whyItMatters:
      'YKI writing is expected to follow yleiskieli norms. Understanding the difference between yleiskieli and regional/dialectal or spoken forms helps candidates avoid register errors.',
    example:
      'Yleiskieli dictates that the standard first-person pronoun is "min\u00e4," not the dialectal "m\u00e4" or regional "mie."',
    relatedTopics: ['yki-writing-errors'],
  },
  {
    slug: 'finnish-connectors',
    title: 'Finnish Connectors',
    definition:
      'Finnish connectors (konnektorit) are linking words and transition phrases that connect ideas within and between sentences. Examples include "ensinn\u00e4" (firstly), "toiseksi" (secondly), "lis\u00e4ksi" (in addition), and "yhteenvetona" (in conclusion). They are essential for coherent YKI writing.',
    relatedArticles: [
      '/wiki/templates/finnish-connectors-for-writing',
      '/wiki/templates/finnish-writing-transition-words-yki-exam',
      '/wiki/templates/finnish-opinion-writing-phrases',
    ],
    keywords: ['finnish connectors', 'transition words', 'konnektorit', 'linking words', 'cohesion'],
    category: 'Linguistics',
    meaningInEnglish:
      'Finnish connectors are linking words that show relationships between ideas in a text.',
    meaningInFinnish: 'Konnektorit / Sillanrakentajat',
    whyItMatters:
      'Using connectors well is a key signal that distinguishes B2 writing from B1. They directly affect the comprehensibility and structural accuracy scores by making the text flow logically.',
    example:
      'An opinion essay uses "ensinn\u00e4" to open the first argument, "toiseksi" for the second, and "yhteenvetona" to begin the conclusion.',
    relatedTopics: ['yki-opinion-writing', 'yki-vocabulary'],
  },

  // ==================== Scoring ====================
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
    meaningInEnglish:
      'Task fulfillment measures how completely the response covers everything the prompt asks for.',
    meaningInFinnish: 'Teht\u00e4v\u00e4n suorittaminen',
    whyItMatters:
      'Missing even one content point from the prompt can drop the task fulfillment score by a full level. Reading the prompt carefully and checking off each point is the highest-impact writing test strategy.',
    example:
      'If a prompt asks for a reason, an apology, and a proposal, the response must include all three; omitting the proposal loses task fulfillment points.',
    relatedTopics: ['yki-email-writing', 'yki-opinion-writing'],
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
    meaningInEnglish:
      'Comprehensibility measures how easily the reader can understand the written text.',
    meaningInFinnish: 'Ymm\u00e4rrett\u00e4vyys',
    whyItMatters:
      'Even with good vocabulary, a text full of errors that break understanding cannot score above B1. Clarity is the foundation of a strong writing score.',
    example:
      'A text with consistent case errors in every sentence is less comprehensible and scores lower than one with occasional errors that do not block meaning.',
    relatedTopics: ['yki-writing-errors'],
  },
  {
    slug: 'vocabulary-range',
    title: 'Vocabulary Range',
    definition:
      'Vocabulary range (sanavarasto) is a YKI writing scoring criterion that evaluates the breadth and appropriateness of the vocabulary used. A wide, accurate vocabulary that fits the topic and register pushes the score toward B2; a limited, repetitive vocabulary keeps it at B1 or below.',
    relatedArticles: [
      '/wiki/templates/yki-b1-vocabulary-list-writing-test',
      '/wiki/templates/yki-b2-vocabulary-list-advanced-finnish-words',
      '/wiki/scoring/yki-opinion-writing-scoring',
    ],
    keywords: ['vocabulary range', 'sanavarasto', 'scoring', 'word choice', 'yki'],
    category: 'Scoring',
    meaningInEnglish:
      'Vocabulary range measures how wide and appropriate the candidate\u2019s word choice is.',
    meaningInFinnish: 'Sanavarasto',
    whyItMatters:
      'Vocabulary range is one of the clearest signals separating B1 from B2 writing. Using topic-specific terms and avoiding repetition is essential for a level 4 score.',
    example:
      'A B2 writer uses "edist\u00e4\u00e4" (to advance) and "vaikutus" (impact) instead of repeating "tekee" (makes) throughout the essay.',
    relatedTopics: ['yki-vocabulary', 'yki-opinion-writing'],
  },
  {
    slug: 'structural-accuracy',
    title: 'Structural Accuracy',
    definition:
      'Structural accuracy (rakenne) is a YKI writing scoring criterion that evaluates grammar correctness: case endings, verb forms, word order, and sentence structure. Few and minor errors allow a B2 score; frequent or serious errors cap the text at B1 or lower.',
    relatedArticles: [
      '/wiki/guides/common-finnish-writing-errors-yki-students',
      '/wiki/scoring/yki-opinion-writing-scoring',
      '/wiki/guides/common-yki-opinion-writing-mistakes',
    ],
    keywords: ['structural accuracy', 'grammar', 'rakenne', 'scoring', 'case endings'],
    category: 'Scoring',
    meaningInEnglish:
      'Structural accuracy measures how grammatically correct the sentences are.',
    meaningInFinnish: 'Rakenteiden oikeellisuus',
    whyItMatters:
      'Finnish grammar (especially case endings) is where many candidates lose points. Consistent grammatical accuracy is required to reach B2, regardless of vocabulary strength.',
    example:
      'Correct partitive "kirjaa" vs. incorrect genitive "kirjan" in a sentence about reading a book affects structural accuracy.',
    relatedTopics: ['yki-writing-errors', 'yki-opinion-writing'],
  },
  {
    slug: 'yki-writing-criteria',
    title: 'YKI Writing Criteria',
    definition:
      'The YKI writing criteria are the four scoring dimensions used to evaluate writing: task fulfillment, comprehensibility, vocabulary range, and structural accuracy. Each is rated independently, and the overall writing level reflects the balance across all four.',
    relatedArticles: [
      '/wiki/scoring/yki-message-writing-scoring',
      '/wiki/scoring/yki-opinion-writing-scoring',
      '/wiki/scoring/yki-level-3-vs-level-4',
    ],
    keywords: ['yki writing criteria', 'scoring criteria', 'yki rubric', 'writing assessment'],
    category: 'Scoring',
    meaningInEnglish:
      'YKI writing criteria are the four dimensions examiners use to grade written Finnish.',
    meaningInFinnish: 'YKI-kirjoittamisen arviointikriteerit',
    whyItMatters:
      'Knowing the four criteria lets candidates self-evaluate before submitting. A weak criterion can pull the overall level down even if the others are strong.',
    example:
      'A text with excellent vocabulary (B2) but many grammar errors (B1) may receive an overall B1 because structural accuracy caps the level.',
    relatedTopics: ['yki-opinion-writing', 'yki-email-writing'],
    faq: [
      {
        question: 'What are the four YKI writing scoring criteria?',
        answer:
          'The four criteria are task fulfillment, comprehensibility, vocabulary range, and structural accuracy. Each is rated independently and the overall level reflects the balance across all four.',
      },
    ],
  },
  {
    slug: 'yki-passing-score',
    title: 'YKI Passing Score',
    definition:
      'The YKI passing score depends on the purpose. For Finnish citizenship, level 3 (B1) in the required skills is the minimum. For university admission and many professional roles, level 4 (B2) is typically expected. Each skill receives its own level.',
    relatedArticles: [
      '/wiki/guides/finnish-language-test-citizenship',
      '/wiki/guides/how-to-pass-yki-test',
      '/wiki/guides/pass-yki-writing-level-3',
    ],
    keywords: ['yki passing score', 'yki pass', 'level 3 citizenship', 'passing level', 'yki result'],
    category: 'Scoring',
    meaningInEnglish:
      'The YKI passing score is the minimum level required for a given purpose, such as citizenship or university admission.',
    meaningInFinnish: 'Hyv\u00e4ksymisraja',
    whyItMatters:
      'Knowing your target level before the exam focuses preparation. Citizenship applicants need level 3; many universities require level 4 in writing specifically.',
    example:
      'A citizenship applicant who needs level 3 (B1) in writing should focus on completing all task content points and writing clear, correct Finnish.',
    relatedTopics: ['yki-writing-skills'],
    faq: [
      {
        question: 'What YKI level do I need to pass for Finnish citizenship?',
        answer:
          'Finnish citizenship requires at least YKI level 3 (CEFR B1) in the relevant skills. The writing sub-test is one of the skills evaluated.',
      },
    ],
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
