/**
 * FAQ 数据
 *
 * 用于 /faq 页面和 FAQPage JSON-LD Schema
 * 支持未来扩展分类: YKI Writing / Email Writing / Opinion Writing / Scoring / AI Checker
 */

export interface FAQItem {
  question: string;
  answer: string;
  category: FAQCategory;
}

export type FAQCategory =
  | 'YKI Writing'
  | 'Email Writing'
  | 'Opinion Writing'
  | 'Scoring'
  | 'AI Checker';

export const faqItems: FAQItem[] = [
  // === YKI Writing ===
  {
    category: 'YKI Writing',
    question: 'What is the YKI writing test?',
    answer:
      'The YKI writing test (YKI kirjoittaminen) is part of the Finnish National Certificate of Language Proficiency (Kansallinen kielitutkinto). It evaluates your ability to write Finnish in practical situations and is graded against CEFR levels A2, B1, and B2 at the intermediate level (keskitaso).',
  },
  {
    category: 'YKI Writing',
    question: 'How many writing tasks are in the YKI intermediate exam?',
    answer:
      'The intermediate YKI writing test typically includes multiple tasks: a short message or email (Task 1), an opinion text or response (Task 2), and sometimes an additional message task (Task 3). Each task evaluates different writing skills and registers.',
  },
  {
    category: 'YKI Writing',
    question: 'How long does the YKI writing test take?',
    answer:
      'The YKI writing sub-test usually takes approximately 55 minutes. Time management matters: candidates should allocate roughly 15–20 minutes per task and keep a few minutes to review grammar and spelling.',
  },
  {
    category: 'YKI Writing',
    question: 'Should I use kirjakieli or puhekieli in the YKI writing test?',
    answer:
      'You must use kirjakieli (standard written Finnish) in the YKI writing test. Puhekieli (spoken language) is penalized in formal writing tasks, especially in the opinion essay (mielipidekirjoitus).',
  },

  // === Email Writing ===
  {
    category: 'Email Writing',
    question: 'What is YKI writing Task 1 (viesti/sähköposti)?',
    answer:
      'Task 1 asks you to write a short message or email in Finnish based on a given situation. You may need to make an announcement, request information, apologize, or confirm an arrangement. The expected length is roughly 25–40 words, and the register (formal vs. informal) depends on the prompt.',
  },
  {
    category: 'Email Writing',
    question: 'How do I start a formal Finnish email in YKI?',
    answer:
      'For formal emails, start with "Hei," or "Hyvä vastaanottaja," followed by the message body. End with a polite closing such as "Ystävällisin terveisin," or "Parhain terveisin," and your name. Avoid spoken forms like "Moi" in formal contexts.',
  },
  {
    category: 'Email Writing',
    question: 'How many words should a YKI message be?',
    answer:
      'A YKI Task 1 message is typically 25–40 words. Focus on completing all the content points required by the prompt rather than padding length. Examiners reward task fulfillment, clarity, and appropriate register over word count.',
  },

  // === Opinion Writing ===
  {
    category: 'Opinion Writing',
    question: 'What is YKI writing Task 2 (mielipidekirjoitus)?',
    answer:
      'Task 2 requires you to write an opinion text in standard Finnish (kirjakieli). You must state your position on a given topic, justify it with reasons, and conclude. A strong response is typically 100–150 words and follows an introduction-body-conclusion structure.',
  },
  {
    category: 'Opinion Writing',
    question: 'How should I structure a Finnish opinion essay?',
    answer:
      'Use a clear structure: (1) Introduction stating your opinion, (2) Body paragraphs with one argument each, supported by examples or reasoning, (3) Conclusion restating your position. Use connectors like "ensinnä," "toiseksi," "lisäksi," and "yhteenvetona" to improve flow.',
  },
  {
    category: 'Opinion Writing',
    question: 'Do I need a title for my YKI opinion text?',
    answer:
      'Yes, a Finnish opinion essay usually requires a clear title (otsikko) that hints at your stance. Keep the title short, relevant, and written in kirjakieli.',
  },

  // === Scoring ===
  {
    category: 'Scoring',
    question: 'How is the YKI writing test scored?',
    answer:
      'YKI writing is scored against CEFR levels (A2, B1, B2) using four criteria: task fulfillment, comprehensibility, vocabulary range, and structural accuracy. Each criterion is rated independently, and the overall level reflects the balance across all four.',
  },
  {
    category: 'Scoring',
    question: 'What CEFR level do I need to pass YKI intermediate?',
    answer:
      'The intermediate YKI exam (keskitaso) targets levels B1–B2. A score at B1 indicates intermediate proficiency, while B2 indicates upper-intermediate. Most academic and professional contexts in Finland require at least B1.',
  },
  {
    category: 'Scoring',
    question: 'What is the difference between B1 and B2 Finnish writing?',
    answer:
      'B1 writing is clear and handles everyday topics but has noticeable errors. B2 writing is more fluent, uses a wider range of vocabulary and complex structures, and handles abstract topics with fewer errors that do not impede communication.',
  },

  // === AI Checker ===
  {
    category: 'AI Checker',
    question: 'Can AI check my YKI writing level?',
    answer:
      'Yes. The ExamCoach.ai AI Writing Checker analyzes your Finnish text and estimates a CEFR level (A2, B1, or B2) based on grammar, vocabulary, structure, and task fulfillment. It is a useful preparation tool but not a substitute for the official YKI exam.',
  },
  {
    category: 'AI Checker',
    question: 'Is the AI Writing Checker free?',
    answer:
      'ExamCoach.ai offers free AI writing checks so you can get instant feedback on your Finnish writing. Additional features and detailed examiner-style reports may be available in premium tiers.',
  },
  {
    category: 'AI Checker',
    question: 'How accurate is the AI YKI writing evaluation?',
    answer:
      'The AI evaluation provides a reliable estimate of your CEFR level and identifies common grammar and vocabulary issues. It is calibrated to YKI scoring criteria but should be used as a preparation aid alongside human feedback when possible.',
  },
];

/** 按分类分组 */
export function getFAQsByCategory(): { category: FAQCategory; items: FAQItem[] }[] {
  const categories: FAQCategory[] = ['YKI Writing', 'Email Writing', 'Opinion Writing', 'Scoring', 'AI Checker'];
  return categories
    .map((category) => ({
      category,
      items: faqItems.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
