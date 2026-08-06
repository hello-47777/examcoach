import { scheduledArticles, WikiArticle } from './wiki-data';
import { getWikiArticles } from './wiki-server';

/**
 * Topic 元数据定义
 *
 * 用于:
 * - app/topics/[topic]/page.tsx Topic Hub 页面
 * - lib/internal-links.ts 内部链接推荐
 *
 * topic 字段值与 lib/wiki-data.ts 中 scheduledArticles 的 topic 一致
 */

export interface TopicMeta {
  /** URL slug, 如 'yki-email-writing' */
  slug: string;
  /** 内部 topic 值, 用于匹配 wiki-data.ts 的 article.topic */
  topic: string;
  /** Topic 标题 */
  title: string;
  /** SEO meta description */
  description: string;
  /** Topic 介绍 (H2 段落) */
  intro: string;
  /** 学习路径步骤 */
  learningPath: { step: string; description: string }[];
}

export const topicMetas: TopicMeta[] = [
  {
    slug: 'yki-email-writing',
    topic: 'message-writing',
    title: 'YKI Email & Message Writing',
    description:
      'Master YKI writing task 1 (viesti & sähköposti). Templates, phrases, examples, scoring, and common mistakes for formal and informal Finnish emails.',
    intro:
      'The YKI email and message writing task (Task 1) tests your ability to write clear, appropriate Finnish for everyday and workplace situations. This topic cluster brings together guides, templates, examples, scoring rubrics, and common-mistake analyses so you can prepare the full task systematically.',
    learningPath: [
      {
        step: 'Understand the task',
        description: 'Read the structure and requirements of YKI writing task 1.',
      },
      {
        step: 'Study templates',
        description: 'Memorize reusable message structures for formal and informal contexts.',
      },
      {
        step: 'Learn phrases',
        description: 'Build a toolkit of Finnish message phrases appropriate to B1–B2 level.',
      },
      {
        step: 'Review examples',
        description: 'Analyze sample answers with explanations to see what scores well.',
      },
      {
        step: 'Avoid mistakes',
        description: 'Study common errors and learn how examiners penalize them.',
      },
      {
        step: 'Check scoring',
        description: 'Understand the rubric so you can self-evaluate before submitting.',
      },
    ],
  },
  {
    slug: 'yki-opinion-writing',
    topic: 'opinion-writing',
    title: 'YKI Opinion Writing',
    description:
      'Master YKI writing task 2 (mielipidekirjoitus). Structure, templates, examples, phrases, scoring, and common mistakes for Finnish opinion essays.',
    intro:
      'The YKI opinion writing task (Task 2, mielipidekirjoitus) evaluates your ability to express and justify an opinion in standard Finnish (kirjakieli). This cluster covers structure, templates, sample essays, phrases, scoring criteria, and the mistakes that most often cost candidates points.',
    learningPath: [
      {
        step: 'Learn the structure',
        description: 'Understand the introduction-body-conclusion framework of a Finnish opinion text.',
      },
      {
        step: 'Study templates',
        description: 'Use proven essay frameworks tailored to B1–B2 level.',
      },
      {
        step: 'Read examples',
        description: 'Analyze sample opinion essays to see argumentation in action.',
      },
      {
        step: 'Build phrase bank',
        description: 'Collect opinion-expressing phrases and connectors.',
      },
      {
        step: 'Understand scoring',
        description: 'See how examiners grade your essay against YKI rubric bands.',
      },
      {
        step: 'Avoid mistakes',
        description: 'Identify and fix the most common opinion writing errors.',
      },
    ],
  },
  {
    slug: 'yki-vocabulary',
    topic: 'vocabulary',
    title: 'YKI Writing Vocabulary',
    description:
      'Build the Finnish vocabulary you need for YKI writing: B1 and B2 word lists, connectors, and transition words for coherent essays.',
    intro:
      'Vocabulary range is one of the strongest signals examiners use to place your writing at A2, B1, or B2 level. This cluster groups B1 essential word lists, B2 advanced vocabulary, connectors, and transition words so you can systematically expand the lexical range you deploy in YKI writing tasks.',
    learningPath: [
      {
        step: 'Master B1 essentials',
        description: 'Learn the core Finnish words required for B1 writing tasks.',
      },
      {
        step: 'Expand to B2',
        description: 'Add advanced vocabulary that distinguishes B2 writing from B1.',
      },
      {
        step: 'Use connectors',
        description: 'Practice Finnish connectors that improve essay flow and cohesion.',
      },
      {
        step: 'Apply transition words',
        description: 'Deploy transition words strategically in opinion texts and emails.',
      },
    ],
  },
  {
    slug: 'yki-ai-writing',
    topic: 'ai-writing',
    title: 'AI-Assisted YKI Writing Preparation',
    description:
      'Use AI to prepare for the YKI writing test. Check your Finnish writing level online, get instant feedback, and practice with AI-powered evaluation.',
    intro:
      'AI feedback can dramatically accelerate YKI writing preparation when used correctly. This cluster covers how to use AI to check your Finnish writing level, get instant feedback, understand AI examiner reports, and practice writing online with structured evaluation.',
    learningPath: [
      {
        step: 'Check your level',
        description: 'Use the AI checker to estimate your current Finnish writing CEFR level.',
      },
      {
        step: 'Understand feedback',
        description: 'Learn to read the AI examiner report and identify your weak areas.',
      },
      {
        step: 'Practice online',
        description: 'Write practice responses and get instant AI scoring.',
      },
      {
        step: 'Prepare with AI',
        description: 'Build a structured preparation plan that leverages AI assistance.',
      },
    ],
  },
  {
    slug: 'yki-writing-errors',
    topic: 'writing-errors',
    title: 'Common Finnish Writing Errors',
    description:
      'Avoid the most common Finnish writing errors YKI students make. Identify, understand, and fix mistakes that lower your YKI writing score.',
    intro:
      'Many YKI candidates lose points not because of missing knowledge, but because of recurring errors in kirjakieli usage, register, and structure. This cluster highlights the highest-impact Finnish writing errors and shows you how to identify and fix them before exam day.',
    learningPath: [
      {
        step: 'Identify common errors',
        description: 'Review the most frequent Finnish writing mistakes made by YKI students.',
      },
      {
        step: 'Understand causes',
        description: 'Learn why each error occurs and how it affects your score.',
      },
      {
        step: 'Apply fixes',
        description: 'Practice targeted corrections to eliminate each error pattern.',
      },
    ],
  },
  {
    slug: 'yki-writing-skills',
    topic: 'writing-skills',
    title: 'Improve Finnish Writing Skills',
    description:
      'Practical strategies to improve your Finnish writing skills for the YKI test. Build daily habits, focused practice routines, and measurable progress.',
    intro:
      'Improving Finnish writing is a long-term project that benefits from structured practice. This cluster covers proven strategies to raise your writing level for the YKI test, with concrete habits and measurable milestones.',
    learningPath: [
      {
        step: 'Assess current level',
        description: 'Establish a baseline with an AI writing evaluation.',
      },
      {
        step: 'Build daily habits',
        description: 'Set up a sustainable daily Finnish writing practice.',
      },
      {
        step: 'Targeted practice',
        description: 'Focus on your weakest writing dimension each week.',
      },
      {
        step: 'Measure progress',
        description: 'Re-evaluate periodically to confirm upward movement.',
      },
    ],
  },
];

/** 根据 slug 查找 TopicMeta */
export function getTopicBySlug(slug: string): TopicMeta | undefined {
  return topicMetas.find((t) => t.slug === slug);
}

/** 获取某 topic 下所有已发布的文章 (按日期升序, 构成学习路径) */
export function getArticlesByTopic(topic: string): WikiArticle[] {
  const published = getWikiArticles();
  const metaMap = new Map(scheduledArticles.map((a) => [a.url, a]));

  return published
    .filter((a) => {
      const meta = metaMap.get(a.url);
      return (meta?.topic || a.category) === topic;
    })
    .map((a) => {
      const meta = metaMap.get(a.url);
      return {
        ...a,
        title: meta?.title || a.slug,
        keywords: meta?.keywords || [],
        topic: meta?.topic || a.category,
        date: meta?.date || a.date,
        updatedAt: meta?.updatedAt,
      };
    })
    .sort((a, b) => (a.date < b.date ? -1 : 1));
}
