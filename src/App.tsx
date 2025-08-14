import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { rehydrateAuth } from "./state/reduxSlices/AuthSlice";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rehydrateAuth());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
