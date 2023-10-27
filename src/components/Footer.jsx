import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
  } from "react-icons/ai";
  

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/25058652"}
          alt="Founder"
        />

        <h2>Rajas Mulik</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          {/* <a href="https://youtube.com/6packprogrammer" target={"blank"}>
            <AiFillYoutube />
          </a> */}
          <a href="https://instagram.com/rajas_mulik_1911" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/hbin1911" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
