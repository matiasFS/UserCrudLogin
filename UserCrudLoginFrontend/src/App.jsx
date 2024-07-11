import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import UpdateUser from "./components/UpdateUser";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import PrivateRoutes from "./components/PrivateRoutes";
import ChangePassword from "./components/ChangePassword";
import LoginService from "./services/LoginService";

function App() {
  return (
    <Router>
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
    </Router>
  );
}
export default App;
