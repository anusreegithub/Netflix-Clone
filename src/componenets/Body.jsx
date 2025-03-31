import React from "react";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";



const ProtectedBrowse = () => {
  return (
    <ProtectedRoute>
      <Browse />
    </ProtectedRoute>
  );
};

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <ProtectedBrowse />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default Body;