import { createBrowserRouter, Navigate } from "react-router-dom";
import { SignIn } from "./pages/auth/signIn";
import { SignUp } from "./pages/register/signUp";
import { AuthLayout } from "./pages/_layouts/authLayout";
import { AppLayout } from "./pages/_layouts/appLayout";
import { Home } from "./pages/app/home";
import { NotFound } from "./pages/error/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/sign-up" replace />, 
  },
  {
    path: "/",
    element: <AuthLayout />, 
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "/App",
    element: <AppLayout />, 
    children: [
      { path: "home", element: <Home /> },
    ],
  },
  {
    path: "*", 
    element: <NotFound />,
  },
]);