import React, { useState,useRef,useEffect } from 'react';
import {animate, motion} from "framer-motion"
import Typewriter from 'typewriter-effect';
import {BsArrowDown, BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assests/profile-pic.png"

const Home = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  const clientCount = useRef(null);
  const projectsCount = useRef(0);
  //counting animation for +100 clients

  const animationClientsCount = () => {
    animate(0,100,{
      duration:1,
      onUpdate:(v)=>(clientCount.current.textContent = v.toFixed()),
    });
  }

  const animationProjectsCount = () => {
    animate(0,20,{
      duration:1,
      onUpdate:(v)=>(projectsCount.current.textContent = v.toFixed()),
    });
  }

  const animations = {
    h1:{
      initial:{
        x: "-100%",
        opacity: 0
      },
      whileInView:{
        x: 0, 
        opacity:1,
      }
    },
    button:{
      initial:{
        y: "-100%",
        opacity: 0
      },
      whileInView:{
        y: 0, 
        opacity:1,
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      
      setNavbarOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='home'>
      <section>
        <div>
            <motion.h1 {...animations.h1}>
                Hi, I Am <br/> Rajas Mulik
            </motion.h1>

            <Typewriter options={{
              strings: ['I am a Web Developer, Web Desingner and Full Stack Developer'],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}/>

            <div>
              <a href="../assests/Rajas Resume-1-1-1.pdf" target='_blank' download="Rajas_Resume.pdf">
                Resume <BsArrowDown/>
              </a>
              <a href="#Work">
                Projects <BsArrowUpRight/>
              </a>
              
            </div>

            {/* <article>
              <p>
                +<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
              </p>
              <span>Clients Worldwide</span>
            </article> */}

            <aside>
            <article>
              <p>
                +<motion.span whileInView={animationProjectsCount} ref={projectsCount}>20</motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>
                Contact
              </p>
              <a href="mailto:rajas.mulik@gmail.com">
              <span>rajas.mulik@gmail.com</span>
              </a>
            </article>
            </aside>
        </div>
      </section>
      <section>
      <motion.img
          src={me}
          alt='Rajas'
          
        />
      </section>
      {/* <BsChevronDown/> */}
    </div>
  )
}

export default Home
