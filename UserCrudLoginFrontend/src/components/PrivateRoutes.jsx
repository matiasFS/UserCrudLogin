import { Outlet, Navigate } from "react-router-dom";
import LoginService from "../services/LoginService";

const PrivateRoutes = () => {
  let auth = { token: LoginService.getCurrentUser() };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
