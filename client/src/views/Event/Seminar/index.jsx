import Sidebar from "../components/Sidebar";
import ItemList from "../../commons/components/ItemList";
import gse from "@img/home/GSE_2021_OEP_and_Teacher_Cap_city_Building_Forum.png";
import index from "@img/event/seminar/index.png";


function Seminar() {
  return (
    <>
      <h1> Seminar </h1>

      <Sidebar />
      <div className="main-content">
        <ItemList
          img={gse}
          title="Open Education Practice and Teacher Capacity Building Forum"
          txt="The forum is jointly hosted by UNESCO IITE, ALECSO, Beijing Normal University and Beijing Institute 
          of Education. Experts from China, Canada, Romania, Tunisia, India and Palestine shared practices and
           theoretical development of utilizing OER and OEP across the world. Over 20000 people watched the 
           livestream of the forum online globally."
          url="1"
        />
      </div>

      <div className="main-content">
        <ItemList
          img={index}
          title="Asia-Arab Region Collaboration on Inclusion in Education Forum"
          txt="SILBNU-ALECSO Joint Lab has hosted Asia-Arab Region 
          Collaboration on Inclusion in Education Forum during  ITU-UNESCO Regional Digital Integration Week in November 2021. "
          url="2"
        />
      </div>
    </>
  );
}
export default Seminar;
