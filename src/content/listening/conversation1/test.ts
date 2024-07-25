import { ITest } from 'helpers/types';

export const test1: ITest = {
  description: 'Вставьте правильные слова на месте пропуска',
  questions: [
    {
      description: 'What products does Assa Abloy manufacture?',
      right: 'We make locks and security systems.',
      translate: 'Какие продукты производит Assa Abloy?',
      variants: [
        'We produce medical equipment.',
        'We make locks and security systems.',
        'We manufacture automotive parts.',
        'We create software applications.',
      ],
    },
    {
      description: "Who are some of Assa Abloy's brand names?",
      right: 'Yale locks, Chubb, and Vachette',
      translate: 'Какие бренды компании Assa Abloy вы знаете?',
      variants: [
        'IBM, Dell, Apple',
        'Yale locks, Chubb, and Vachette',
        'Coca-Cola, Pepsi, Red Bull',
        'Sony, LG, Samsung',
      ],
    },
    {
      description: 'Who are the main competitors of Assa Abloy?',
      right: 'Ingersoll, Rand, Masterlock',
      translate: 'Кто являются основными конкурентами Assa Abloy?',
      variants: [
        'Google, Facebook, Amazon',
        'Ingersoll, Rand, Masterlock',
        'Apple, Microsoft, IBM',
        'Tesla, Ford, Toyota',
      ],
    },
    {
      description: 'Where is Assa Abloy based?',
      right: 'Sweden',
      translate: 'В какой стране базируется Assa Abloy?',
      variants: ['Germany', 'Sweden', 'China', 'France'],
    },
    {
      description: 'How many employees does Assa Abloy have?',
      right: '43,000 employees',
      translate: 'Сколько сотрудников работает в Assa Abloy?',
      variants: [
        '5,000 employees',
        '8,500 employees',
        '43,000 employees',
        '75,000 employees',
      ],
    },
    {
      description: 'How many countries does Assa Abloy operate in?',
      right: 'Over 70 different countries',
      translate: 'Во сколько странах действует Assa Abloy?',
      variants: [
        '33 countries',
        'Over 50 different countries',
        'Over 70 different countries',
        '100 countries',
      ],
    },
  ],
};
