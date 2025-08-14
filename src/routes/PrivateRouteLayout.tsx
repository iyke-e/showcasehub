import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "@/state/store";

const PrivateLayout = () => {
    const { isLoggedIn, hydrated } = useSelector((state: RootState) => state.auth);

    if (!hydrated) return null; // or <LoadingSpinner />

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateLayout;
