import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeView } from './Views/HomeView';
import NotFound from './Views/NotFound';
import Awarded from './Views/Awarded';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeView />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/awarded/:idYear/:idArticle",
        element: <Awarded/>,
    }
]);

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

/*

const root = createRoot(document.getElementById('app'))

root.render(<App />)
*/