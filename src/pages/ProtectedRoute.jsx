import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return children;
};
export default ProtectedRoute;
