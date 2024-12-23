import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router';
import Home from './pages/Home/Home.jsx';
import './styles/style.scss';
import About from './pages/About/About.jsx';

const root = document.getElementById('root');

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
