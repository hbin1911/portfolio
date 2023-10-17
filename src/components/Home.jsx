import React from 'react';
import {motion} from "framer-motion"

const Home = () => {
  return (
    <div id='home'>
      <section>
        <div>
            <motion.h1 initial={{
                x: "-100%", opacity: 0
            }}
            whileInView={{
                x: 0, opacity:1,
            }}>
                Hi, I Am <br/> Rajas Mulik
            </motion.h1>
        </div>
      </section>
      <section></section>
    </div>
  )
}

export default Home
