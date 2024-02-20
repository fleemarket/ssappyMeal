import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import MainPage from './pages/MainPage.jsx';


function PrivateRoute({ element }) {
  const location = useLocation();

 
  return element;
}
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
          <App />
      ),
      // errorElement: <ErrorPage />,

      children: [
        {
          path: "",
          element: <PrivateRoute element={<MainPage />} />,
        },
      ],
    },
  ],
  // {
  //   basename: "/app",
  // }
);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
