import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Home, Login, NoPage, Register } from "./pages";
import Layout from "./pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout Children = {Home} />,
      errorElement: <NoPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88",
            },
          },
          error: {
            theme: {
              primary: "red",
            },
          },
        }}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
