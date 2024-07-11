import { Lesson } from 'components/pages/Lesson/ui/Lesson';
import { Main } from 'components/pages/Main/ui/Main';
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
    element: <h1>Grammar</h1>,
  },
  {
    path: '/reading',
    element: <h1>Reading</h1>,
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
