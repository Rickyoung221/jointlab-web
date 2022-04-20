import { Outlet } from "react-router-dom";
import "./assets/App.css";
import Navbar from "./views/commons/Navbar";
import Footer from "./views/commons/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="Web-body">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default App;
