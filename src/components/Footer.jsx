import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiOutlineArrowUp,
  } from "react-icons/ai";
  import hello from "../assests/footer-pic.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={hello}
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
