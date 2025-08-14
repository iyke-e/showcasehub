import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "@/state/store";


const PublicLayout = () => {
    const { isLoggedIn, hydrated } = useSelector((state: RootState) => state.auth);

    if (!hydrated) return null;

    return isLoggedIn ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicLayout;