import { useState } from "react";
import { motion } from "framer-motion";
import StarBorder from "../animate_compo/StarBorder";
import ShinyText from "../animate_compo/ShineText";

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
    <section id="contact" className="relative pt-20 pb-16 bg-black text-white flex justify-center items-center">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Social Links */}
          <div className="flex flex-col gap-4 text-left md:text-start w-full md:w-1/3">
            <ShinyText
              text="Connect With Me" disabled={false} speed={3} className='custom-class flex justify-start text-xl font-md  mb-2  text-center' />
            <ul className="space-y-2">
              <li>
                <ShinyText
                  text=" Instagram : @vue_coders" disabled={false} speed={3} className='custom-class text-l font-md text-center' />
                <a href="#" className="text-white"></a></li>
              <li>
                <ShinyText
                  text=" GitHub : Meraj-1" disabled={false} speed={3} className='custom-class text-l font-md text-center' />

              </li>
              <li>
                <ShinyText
                  text="Gmail : mohdmerajansari76@gmail.com" disabled={false} speed={3} className='custom-class text-l font-md text-center' />
              </li>
            </ul>
          </div>

          {/* Optional Center Image */}
          {/* <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            src="your-image-url.png"
            alt="Contact Visual"
            className="w-[250px] md:w-[300px] rounded-lg object-cover"
          /> */}

          {/* Contact Form */}
          <div className="w-full max-w-lg md:w-2/3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-lg font-medium text-center"
              >
                🎉 Your message has been sent successfully! Thank you for reaching out.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name Field */}
                <StarBorder>
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 bg-inherit focus:outline-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </StarBorder>
                {/* Email Field */}
                <StarBorder>
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2  rounded-lg bg-inherit focus:outline-none text-white "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                  />
                </StarBorder>
                {/* Message Field */}
                <StarBorder>
                  <motion.textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-2  rounded-lg bg-inherit text-white focus:outline-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </StarBorder>
                {/* Submit Button */}
                <StarBorder>
                  <button
                    type="submit"
                  >
                    <ShinyText
                      text="Send Message" disabled={false} speed={3} className='custom-class normal_text  text-xl font-bold text-center' />
                  </button>
                </StarBorder>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


