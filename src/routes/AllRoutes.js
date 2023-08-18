import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Home, CreatePage, Error } from "../pages";
export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};
