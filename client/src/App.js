import { Outlet } from "react-router-dom";
import "./assets/App.css";
import NavbarPage from "./screens/commons/Navbar";
import FooterPage from "./screens/commons/Footer";

function App() {
  return (
    <>
      <NavbarPage />
      <div className = 'Web-body'>
        <Outlet />
      </div>
      <FooterPage />
    </>
  );
}

export default App;
