import { Outlet } from "react-router-dom";
import './assets/App.css';
import NavbarPage from './screens/commons/Navbar';
import FooterPage from './screens/commons/Footer';



function App() {

  return (
    <>
      <NavbarPage />
        <body>
          <Outlet />
        </body>
      <FooterPage />
    </>
  );
}


export default App;
