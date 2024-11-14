import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './page/Login';
import Product from './page/Product';
import Header from './component/Header';
import Profile from './page/Profile';
import DataProvider from './lib/provider';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <App />
            </>
        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/profile',
        element: (
            <>
                <Header />
                <Profile />
            </>
        ),
    },
    {
        path: '/product',
        element: (
            <>
                <Header />
                <Product />
            </>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DataProvider><RouterProvider router={router} /></DataProvider>
    </React.StrictMode>,
);

reportWebVitals();
