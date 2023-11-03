import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/js',
                element: <JavaScript/>
            },
            {
                path: '/html',
                element: <HTML/>
            },
            {
                path: '/api',
                element: <API/>
            },
            {
                path: '/node',
                element: <Node/>
            },
            {
                path: '/oop',
                element: <OOP/>
            },
            {
                path: '/express',
                element: <Express/>
            },
            {
                path: '/sql',
                element: <MySQL/>
            },
            {
                path: '/orm',
                element: <ORM/>
            },
            {
                path: '/compsci',
                element: <CompSci/>
            },
            {
                path: '/nosql',
                element: <NoSql/>
            },
            {
                path: '/pwa',
                element: <PWA/>
            },
            {
                path: '/react',
                element: <React/>
            },
            {
                path: '/graphql',
                element: <GraphQl/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);