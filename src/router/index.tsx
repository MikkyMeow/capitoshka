import { GrammarLesson } from 'components/pages/GrammarLesson/GrammarLesson';
import { GrammarList } from 'components/pages/GrammarList/GrammarList';
import { Main } from 'components/pages/Main/ui/Main';
import { ReadingLesson } from 'components/pages/ReadingLesson/ReadingLesson';
import { ReadingList } from 'components/pages/ReadingList/ReadingList';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/sign-in',
    element: <h1>Sign in</h1>,
  },
  {
    path: '/sign-up',
    element: <h1>Sign up</h1>,
  },
  {
    path: '/grammar',
    element: <GrammarList />,
  },
  {
    path: '/grammar/:slug',
    element: <GrammarLesson />,
  },
  {
    path: '/reading',
    element: <ReadingList />,
  },
  {
    path: '/reading/:slug',
    element: <ReadingLesson />,
  },
  {
    path: '/Listening',
    element: <h1>Listening</h1>,
  },
  {
    path: '/speaking',
    element: <h1>Speaking</h1>,
  },
]);
