import { Routes, Route } from "react-router-dom";
import ListOfUsers from "./components/ListOfUsers";
import UpdateUser from "./components/UpdateUser";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import PrivateRoutes from "./components/PrivateRoutes";
import ChangePassword from "./components/ChangePassword";
import LoginService from "./services/LoginService";
import NavBar from "./components/NavBar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
      <div>
        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route exact path="/" element={<LoginPage />} />

          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/home" exact />
            <Route element={<ListOfUsers />} path="/users" />
            {LoginService.adminOnly() && (
              <Route path="/update/:id" element={<UpdateUser />} />
            )}
            <Route path="/changePassword" element={<ChangePassword />} />
          </Route>
        </Routes>
      </div>
  );
}
export default App;
