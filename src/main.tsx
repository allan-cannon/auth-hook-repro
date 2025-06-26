import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import the layout components
import RootLayout from './layouts/root';

// Import the route components
import IndexPage from './routes';

// Loaders and Actions are NOT supported by Clerk at the moment with React Router
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: '/', element: <IndexPage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
