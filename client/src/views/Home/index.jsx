import Carousel from "../commons/components/Carousel";
import Scrollspy from "../commons/components/Scrollspy";
import "./home.css";

function HomePage() {
  return (
    <div className="home-page">
      <Carousel />
      <Scrollspy />
    </div>
  );
}
export default HomePage;
