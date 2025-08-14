import { createBrowserRouter } from "react-router"
import LandingPage from "../pages/LandingPage"
import Login from "../pages/auth/Login"
import Signup from "../pages/auth/Signup"
import Dashboard from "../pages/Dashboard"
import Profile from "../pages/Profile"
import PublicLayout from "./PublicRouteLayout"
import PrivateLayout from "./PrivateRouteLayout"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            { path: "", element: <LandingPage /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateLayout />,
        children: [
            { path: "", element: <Dashboard /> },
            { path: "profile", element: <Profile /> },
        ],
    },
]);

