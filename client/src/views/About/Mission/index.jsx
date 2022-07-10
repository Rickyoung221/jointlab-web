import Sidebar from '../components/Sidebar';
import './Mission.css';

function Mission() {
  return (
    <>
      <h1> Vision </h1>
      <Sidebar />
      <div className="mission">
      <div className="text-center">
        <strong>Thriving for a more innovative and inclusive education</strong>
      </div>
      <p>
        The
        SLIBNU-ALECSO Smart Education Joint Lab provides academic resources
        and an international exchange platform for students and educators,
        aiming to promote the development of education in China and the Arab
        region, so as to achieve inclusion of education, technological
        innovation and social participation. Reshaping the education landscape
        through technology: educational reforms are taking place all the time.
        We expect that in the future education, the school's overall educational
        ecology will be activated and reconstructed through the empowerment of
        mutual technologies. The Joint Lab therefore thrive to creating an
        innovative computer-aided education environment and facilitate educators
        and students to embrace digital teaching and learning. The joint lab
        work closely with the leading ed-teach enterprises in China and the Arab
        region, providing academic support to the industry while getting
        inspired from innovation in practices.
        <br />
        Empowering all children through educational technology: We expect that
        in future education, students will achieve equal opportunities in
        education through educational technology. By promoting distance
        learning, flexible learning, and open educational resources, the Joint
        Lab contribute to inclusion of education and enable every child to
        access quality education, especially those are in the disadvantaged
        position. Our lab aims to promote a more inclusive and
        technological-supported education in China, the Arab region, and even
        the world.
      </p>
      </div>

      <h1> Mission </h1>

      <div>
        <ul className="mission">
          
          <li>
            {' '}
            We are devoted to promote the cutting edge research in the field of
            education technology, with a focus in Open Education Resources,
            Metaverse and Education and Artificial intelligence in education.{' '}
          </li>
          <li>
            {' '}
            We are committed to improve the international collaboration between
            China and the Arab region through joint research projects,
            international conferences, webinars, and seminars to bridges the
            scholars in China and the Arab region and enhance the communication.{' '}
          </li>
          <li>
            {' '}
            We are passionate about integrating education technology into
            educational practices with the goal to benefit students and
            educators in the Arab region and beyond.{' '}
          </li>
          <li>
            {' '}
            We hope to promote smart education by organizing ICT related teacher
            training events and establishing education showroom in the Arab
            region.{' '}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Mission;
