import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../utils/userContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return user ? children : null;
};


export default ProtectedRoute;
