import { MainLayout } from "@/components/layouts";
import { Home } from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />
      }
    ]
  }
])