import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Javascript from './components/pages/JavaScript.jsx'
import HTML from './components/pages/Html.jsx'
import CSS from './components/pages/Css.jsx'
import Express from './components/pages/Express.jsx'
import Api from './components/pages/Api.jsx'
import Node from './components/pages/Node.jsx'
import Oop from './components/pages/Oop.jsx'
import Orm from './components/pages/Orm.jsx'
import Pwa from './components/pages/Pwa.jsx'
import Graphql from './components/pages/Graphql.jsx'
import Sql from './components/pages/Sql.jsx'
import MongoDB from './components/pages/MongoDB.jsx'
import Reactjs from './components/pages/React.jsx'
import CompSci from './components/pages/ComputerScience.jsx'

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
                element: <Javascript/>
            },
            {
                path: '/html',
                element: <HTML/>
            },
            {
                path: '/css',
                element: <CSS/>
            },
            {
                path: '/api',
                element: <Api/>
            },
            {
                path: '/node',
                element: <Node/>
            },
            {
                path: '/oop',
                element: <Oop/>
            },
            {
                path: '/express',
                element: <Express/>
            },
            {
                path: '/sql',
                element: <Sql/>
            },
            {
                path: '/orm',
                element: <Orm/>
            },
            {
                path: '/compsci',
                element: <CompSci/>
            },
            {
                path: '/nosql',
                element: <MongoDB/>
            },
            {
                path: '/pwa',
                element: <Pwa/>
            },
            {
                path: '/react',
                element: <Reactjs/>
            },
            {
                path: '/graphql',
                element: <Graphql/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);