import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import NavContent from './NavContent'; 


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  // const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav id="header">
      <NavContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

const NavContent = ({menuOpen, setMenuOpen}) => (
  <>
    <h2>Rajas</h2>
    <section className="menu" onClick={()=> setMenuOpen(!menuOpen)}>
      {/* <span className="span"></span>
      <span className="span"></span>
      <span className="span"></span> */}
      <FontAwesomeIcon icon={faBars} className="span"/>
    </section>
    <div className={menuOpen ? "open" : ""}>
      <a href="#home">Home</a>
      <a href="#Work">Work</a>
      {/* <a href="#timeline">Experience</a> */}
      <a href="#skills">Skills</a>
      {/* <a href="#testimonial">Testimonial</a> */}
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:rajas.mulik@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
