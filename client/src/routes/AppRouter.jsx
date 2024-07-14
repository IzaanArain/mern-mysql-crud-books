import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "../pages/Books";
import Add from "../pages/Add";
import Edit from "../pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
]);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
