import React, { useRef } from "react";
import vg from "../assests/vg.png";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
// import { addDoc, collection } from 'firebase/firestore';
// import {db} from '../firebase';

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [disableBtn, setDisableBtn] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    // e.preventDefault();
    // setDisableBtn(true);
    // try {
    //   // await addDoc(collection(db, "contacts"), {
    //   //   name,
    //   //   email,
    //   //   message,
    //   // });
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    //   toast.success("Message Sent");
    //   setDisableBtn(false);
    //   } catch (error) {
    //     toast.error("Error")
    //     console.log(error);
    //   }

    e.preventDefault();
    emailjs
      .sendForm(
        "service_00q8f3u",
        "template_5ao5mmb",
        form.current,
        "Ol3p3KJJ_nCiX-SNQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Message Sent");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error")
        }
      );
  };
  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form ref={form} onSubmit={sendEmail} {...animations.form}>
          <h2>Contact Me</h2>

          <input
            type="text"
            placeholder="Enter Your Name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="user_email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            // value="Send Message"
            required
          />

          <motion.button {...animations.button} type="submit">
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="contact image" />
      </aside>
    </div>
  );
};

export default Contact;
