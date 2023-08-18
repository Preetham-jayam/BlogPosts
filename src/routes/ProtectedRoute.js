import { Navigate } from "react-router-dom"


export const ProtectedRoute = ({children}) => {
  const isLoggedIn=JSON.parse(localStorage.getItem('isLoggedIn') || false);
  return isLoggedIn ? children : <Navigate to="/" />
}
