import { Main } from "components/pages/Main/ui/Main";
import { createBrowserRouter } from "react-router-dom";

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
])