
import StructureImg from '../../../assets/img/team_structure.jpg'
import Sidebar from '../components/Sidebar';


export default function AdvisoryBoard(){
  return(
    <>
    <h1> Advisory Board</h1>
    <Sidebar />
    <div className='main-content'>
    <br/>
    <br/>
    <img src={StructureImg} className='img-fluid' alt='Team Structure' />
    </div>
    <br/>
    </>
  )
}
