import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import GameOld from './modules/gameOld/index.tsx';
import Home from './modules/home/index.tsx';
import Final from './modules/final/index.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'game-old',
        element: <GameOld />
      },
      {
        path: 'final',
        element: <Final/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
