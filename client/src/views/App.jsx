import { Outlet } from "react-router-dom";
import "../assets/App.css";
import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";

//Layout
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
