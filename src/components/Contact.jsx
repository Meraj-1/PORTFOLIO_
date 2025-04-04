import { useState } from "react";
import {motion} from "framer-motion"
import { Icon } from "../assests/assets";
// import Particles from "./Particles";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/xnnqbwow", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="relative mt-0 flex md:flex-row flex-col text-white pt-16">
  
    <div className="relative container mx-auto text-center px-6 z-10">
      <div className="flex flex-col justify-center items-center">
          <motion.img
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
      src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-coding-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--html-logo-programming-developer-futuristic-20-pack-science-technology-illustrations-9008568.png?f=webp"

           alt="Contact Icon"      className="h-[260px] cursor-pointer md:h-[350px] rounded-lg  object-cover" />
        
        <div className="w-full">
          {submitted ? (
            <div className="text-green-400 text-lg font-medium">
              🎉 Your message has been sent successfully! Thank you for reaching out.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto"
            >
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-lg text-white border bg-black focus:outline-none"
              />
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-lg text-white border bg-black focus:outline-none"
              />
              <motion.textarea
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded-lg text-white border bg-black focus:outline-none"
              />
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                type="submit"
                className="bg-black text-white border-b font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </div>
      </div>
      <div className="mt-10 border-t border-white w-9/4 mx-auto"></div>
    </div>
  </section>
  
  );
};

export default Contact;
