import React from 'react';
import { Button } from '@mui/material';
import styles from './Main.module.css';
import { Tooltip } from 'components/ui/Tooltip/Tooltip';
import { Link } from 'react-router-dom';

export interface ILesson {
  link: string;
  name: string;
}

// const lessons = [
//   {
//     link: 'https://learn-english-app-nu.vercel.app/api/lesson/lesson_1/',
//     name: 'Conversation #1',
//   },
// ];

const lessonType = [
  {
    name: 'Grammar',
    disabled: false,
    path: '/grammar',
  },
  {
    name: 'Reading',
    disabled: false,
    path: '/reading',
  },
  {
    name: 'Listening',
    disabled: false,
    path: '/listening',
  },
  {
    name: 'Speaking',
    disabled: true,
    path: '/speaking',
  },
];

export const Main: React.FC = () => {
  return (
    <div className={styles.root}>
      {lessonType.map((lesson) => (
        <Tooltip title={lesson.disabled ? 'Later' : ''}>
          <Link
            to={lesson.path}
            className={`${styles.button} ${
              lesson.disabled ? styles.disabled : ''
            }`}
          >
            {lesson.name}
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};
