import { createBrowserRouter } from "react-router"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ProtectedRoute from "./ProtectedRoutes"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        element: <ProtectedRoute isAuthenticated={true} />,
        children: [

        ]
    }

])