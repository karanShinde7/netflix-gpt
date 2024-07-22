import React from "react";
import Login from "../authentication/login";
import Browse from "../browse/browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Container = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Container;
