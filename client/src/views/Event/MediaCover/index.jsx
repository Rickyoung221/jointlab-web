import Sidebar from "../components/Sidebar";
import ItemList from "../../commons/components/ItemList";
import completition from "../../../assets/img/event/mediaCover/Picture3.png";

function MediaCover() {
  return (
    <>
      <h1> Media Cover </h1>
      <Sidebar />
      <div className="main-content">
        <ItemList
          img={completition}
          title="The Global Finals of 2021 Global Competition on Design for Future Education Successfully Held at Beijing Normal University"
          txt="Co-organize the Global Competition on Design for Future Education in order to cultivate talents worldwide and in the Arab region."
          url="1"
        />
      </div>
    </>
  );
}
export default MediaCover;
