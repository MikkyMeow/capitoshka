import { theory } from './grammar/presentSimple/theory';
import { test } from './grammar/presentSimple/test';
import { ITest } from 'helpers/types';

export interface IThemeLinks {
  name: string;
  link: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
  theory: string[];
  test: ITest;
}

export const themes: IThemeLinks[] = [
  {
    name: 'Present simple (настоящее простое время)',
    link: '/grammar/present-simple',
    level: 0,
    theory,
    test,
  },
  // {
  //   name: 'Present continuous (настоящее продолженное время)',
  //   link: '/grammar/present-continuous',
  //   level: 0,
  // },
  // {
  //   name: 'Simple past (прошедшее простое время)',
  //   link: '/grammar/simple-past',
  //   level: 0,
  // },
  // {
  //   name: 'Articles (определенный и неопределенный артикли)',
  //   link: '/grammar/article',
  //   level: 0,
  // },
  // {
  //   name: 'Plurals (образование множественного числа)',
  //   link: '/grammar/plurals',
  //   level: 0,
  // },
  // {
  //   name: 'Personal pronouns (личные местоимения)',
  //   link: '/grammar/personal-pronouns',
  //   level: 0,
  // },
  // {
  //   name: 'Possessive adjectives (притяжательные местоимения)',
  //   link: '/grammar/possessive-adjectives',
  //   level: 0,
  // },
  // {
  //   name: 'Prepositions of place (предлоги места)',
  //   link: '/grammar/place-prepositions',
  //   level: 0,
  // },
  // {
  //   name: 'Adjectives and adverbs (прилагательные и наречия)',
  //   link: '/grammar/adjectives-adverbs',
  //   level: 0,
  // },
  // {
  //   name: 'Past continuous (прошедшее продолженное время)',
  //   link: '/grammar/past-continuous',
  //   level: 1,
  // },
  // {
  //   name: 'Future simple (будущее простое время)',
  //   link: '/grammar/future-simple',
  //   level: 1,
  // },
  // {
  //   name: 'Comparative and superlative forms of adjectives (сравнительная и превосходная степени прилагательных)',
  //   link: '/grammar/Comparative-superlative-adjectives-forms',
  //   level: 1,
  // },
  // {
  //   name: 'Countable and uncountable nouns (исчисляемые и неисчисляемые существительные)',
  //   link: '/grammar/countable-uncountable-nouns',
  //   level: 1,
  // },
  // {
  //   name: 'Modal verbs (модальные глаголы)',
  //   link: '/grammar/modal-verbs',
  //   level: 1,
  // },
  // {
  //   name: 'Question forms (формы вопросов)',
  //   link: '/grammar/question-forms',
  //   level: 1,
  // },
  // {
  //   name: 'Imperatives (повелительное наклонение)',
  //   link: '/grammar/imperatives',
  //   level: 1,
  // },
  // {
  //   name: 'Past simple vs. present perfect (прошедшее простое время против настоящего совершенного времени)',
  //   link: '/grammar/past-simple-vs-present-perfect',
  //   level: 1,
  // },
  // {
  //   name: 'Past perfect (прошедшее совершенное время)',
  //   link: '/grammar/past-perfect',
  //   level: 2,
  // },
  // {
  //   name: 'Future forms (будущее время)',
  //   link: '/grammar/future-forms',
  //   level: 2,
  // },
  // {
  //   name: 'Reported speech (косвенная речь)',
  //   link: '/grammar/reported-speech',
  //   level: 2,
  // },
  // {
  //   name: 'Conditional sentences (условные предложения)',
  //   link: '/grammar/conditional-sentences',
  //   level: 2,
  // },
  // {
  //   name: 'Gerunds and infinitives (герундий и инфинитив)',
  //   link: '/grammar/gerunds-infinitives',
  //   level: 2,
  // },
  // {
  //   name: 'Passive voice (страдательный залог)',
  //   link: '/grammar/passive-voice',
  //   level: 2,
  // },
  // {
  //   name: 'Relative clauses (относительные придаточные предложения)',
  //   link: '/grammar/relative-clauses',
  //   level: 2,
  // },
  // {
  //   name: 'Phrasal verbs (фразовые глаголы)',
  //   link: '/grammar/phrasal-verbs',
  //   level: 2,
  // },
  // {
  //   name: 'Mixed conditionals (смешанные условные предложения)',
  //   link: '/grammar/mixed-conditionals',
  //   level: 3,
  // },
  // {
  //   name: 'Causative forms (формы вызывания действия)',
  //   link: '/grammar/causative-forms',
  //   level: 3,
  // },
  // { name: 'Inversion (инверсия)', link: '/grammar/inversion', level: 3 },
  // {
  //   name: 'Modal perfects (модальные совершенные времена)',
  //   link: '/grammar/modal-perfects',
  //   level: 3,
  // },
  // {
  //   name: 'Emphatic structures (эмфатические структуры)',
  //   link: '/grammar/emphatic-structures',
  //   level: 3,
  // },
  // {
  //   name: 'Participle clauses (причастные предложения)',
  //   link: '/grammar/participle-clauses',
  //   level: 3,
  // },
  // {
  //   name: 'Conditional perfect (условное совершенное время)',
  //   link: '/grammar/conditional-perfect',
  //   level: 3,
  // },
  // {
  //   name: 'Adverbial clauses (обстоятельственные придаточные предложения)',
  //   link: '/grammar/adverbial-clauses',
  //   level: 3,
  // },
];
