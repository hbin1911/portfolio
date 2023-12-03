import React, { useRef } from 'react';
import {animate, motion} from "framer-motion"
import Typewriter from 'typewriter-effect';
import {BsArrowDown, BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assests/profile-pic.png"

const Home = () => {

  const clientCount = useRef(null);
  const projectsCount = useRef(null);
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
              <a href="../assests/Rajas_Resume.pdf" target='blank'>
                Resume <BsArrowDown/>
              </a>
              <a href="#work">
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
        <img src={me} alt="Rajas" />
      </section>
      {/* <BsChevronDown/> */}
    </div>
  )
}

export default Home
