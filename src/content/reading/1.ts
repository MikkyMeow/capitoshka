import { IReading } from '.';

export const reading1: IReading = {
  name: "John's introduce",
  link: '/reading/johns-introduce',
  level: 'a1',
  text: 'Hello! My name is John. I am 25 years old. I am from New York. I speak English. I like to eat pizza and watch movies. I have a cat. Its name is Fluffy. I work in a shop. I like my job.',
  translate:
    'Привет! Меня зовут Джон. Мне 25 лет. Я из Нью-Йорка. Я говорю по-английски. Я люблю есть пиццу и смотреть фильмы. У меня есть кот. Его зовут Флаффи. Я работаю в магазине. Мне нравится моя работа.',
  questions: {
    description: 'Выберите правильный вариант ответа',
    questions: [
      {
        description: 'Where is John from?',
        variants: ['London', 'New York', 'Paris', 'Tokyo'],
        right: 'New York',
        translate: 'Откуда Джон?',
      },
      {
        description: 'What does John like to eat?',
        variants: ['Sushi', 'Pizza', 'Tacos', 'Salad'],
        right: 'Pizza',
        translate: 'Что Джон любит есть? ',
      },
      {
        description: 'How old is John?',
        variants: ['20', '25', '30', '35'],
        right: '25',
        translate: 'Сколько лет Джону? ',
      },
      {
        description: "What is the name of John's pet?",
        variants: ['Spot', 'Whiskers', 'Fluffy', 'Fido'],
        right: 'Fluffy',
        translate: 'Как зовут питомца Джона?',
      },
      {
        description: 'What does John do for a living? ',
        variants: ['Doctor', 'Teacher', 'Police officer', 'Shop worker'],
        right: 'Shop worker',
        translate: 'Чем Джон зарабатывает на жизнь?',
      },
    ],
  },
};
