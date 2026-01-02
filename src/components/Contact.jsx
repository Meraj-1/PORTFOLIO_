// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     fetch("https://formspree.io/f/xnnqbwow", {
//       method: "POST",
//       body: new FormData(form),
//       headers: { Accept: "application/json" },
//     })
//       .then((res) => {
//         if (res.ok) {
//           setSubmitted(true);
//           form.reset();
//         } else alert("Something went wrong. Try again.");
//       })
//       .catch(() => alert("Something went wrong. Try again."));
//   };

//   return (
//     <section className="relative w-full bg-black text-white py-28 px-6 overflow-hidden">
//       {/* Floating Neon Dots */}
//       <motion.div
//         animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
//         transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
//         className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-[#C778DD]/20 rounded-full blur-3xl"
//       />
//       <motion.div
//         animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
//         transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
//         className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#FF6B6B]/20 rounded-full blur-3xl"
//       />

//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 relative z-10">
//         {/* Left: Contact Info Card */}
//         <motion.div
//           initial={{ rotateY: -15, opacity: 0 }}
//           whileInView={{ rotateY: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="md:w-[400px] bg-[#111111] p-10 rounded-3xl shadow-2xl relative overflow-hidden"
//         >
//           <h2 className="text-2xl font-bold text-[#C778DD] mb-4">Contact Info</h2>
//           <p className="text-gray-400 mb-8">
//             Get in Touch! I am always open for discussions, collaborations or queries.
//           </p>

//           {/* Contact Items with neon line connectors */}
//           {[
//             { icon: FaPhoneAlt, text: "+91 73041 85760" },
//             { icon: FaEnvelope, text: "mohdmerajansari76@" },
//             { icon: FaMapMarkerAlt, text: "Ghatkopar, E Mumbai, Maharashtra, India - 400077" },
//           ].map((item, idx) => (
//             <div key={idx} className="flex items-center gap-4 mb-6 relative">
//               {/* Connector Line */}
//               <span className="absolute left-5 top-1/2 w-[2px] h-full bg-[#C778DD]/50 -z-10"></span>
//               <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#C778DD]">
//                 <item.icon />
//               </div>
//               <span className="text-gray-400">{item.text}</span>
//             </div>
//           ))}

//           {/* Social Icons */}
//           <div className="flex gap-6 mt-12 text-2xl">
//             {[FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
//               <motion.a
//                 key={idx}
//                 whileHover={{ scale: 1.4, rotate: 10, color: "#C778DD" }}
//                 className="transition cursor-pointer"
//                 href="#"
//               >
//                 <Icon />
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right: Contact Form Card */}
//         <motion.div
//           initial={{ rotateY: 15, opacity: 0 }}
//           whileInView={{ rotateY: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="md:w-[700px] bg-[#0A0A0A] p-10 rounded-3xl shadow-2xl"
//         >
//           {submitted ? (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="text-center py-12 text-green-400 font-semibold text-lg"
//             >
//               🎉 Your message has been sent successfully! Thank you for reaching out.
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   required
//                   className="bg-transparent border-b border-gray-600 py-2 outline-none focus:border-[#C778DD] transition duration-300"
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   required
//                   className="bg-transparent border-b border-gray-600 py-2 outline-none focus:border-[#C778DD] transition duration-300"
//                 />
//               </div>

//               {/* Email & Phone */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   required
//                   className="bg-transparent border-b border-gray-600 py-2 outline-none focus:border-[#C778DD] transition duration-300"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   required
//                   className="bg-transparent border-b border-gray-600 py-2 outline-none focus:border-[#C778DD] transition duration-300"
//                 />
//               </div>

//               {/* Subject Radio */}
//               <div>
//                 <label className="block text-gray-400 mb-2">Select Subject</label>
//                 <div className="flex flex-wrap gap-4">
//                   {["General Inquiry", "Feedback", "Business Inquiry", "Support"].map((option) => (
//                     <label
//                       key={option}
//                       className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-[#C778DD] transition"
//                     >
//                       <input
//                         type="radio"
//                         name="subject"
//                         value={option}
//                         defaultChecked={option === "General Inquiry"}
//                         className="accent-[#C778DD] w-4 h-4"
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <textarea
//                   name="message"
//                   rows={4}
//                   placeholder="Write your message..."
//                   required
//                   className="w-full bg-transparent border-b border-gray-600 py-2 outline-none focus:border-[#C778DD] transition duration-300 resize-none"
//                 />
//               </div>

//               {/* Submit Button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="w-full md:w-[214px] h-[54px] bg-[#C778DD] hover:bg-[#FF6B6B] border-2 border-black text-white font-semibold text-lg px-8 py-[15px] rounded-[8px] shadow-2xl hover:shadow-black/50 transition-all duration-300 flex items-center justify-center gap-2 ml-auto"
//               >
//                 Send Message
//               </motion.button>
//             </form>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch("https://formspree.io/f/xnnqbwow", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Transmission Failed. Try again.");
    }
  };

  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden px-6 py-32">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(#C778DD22_1px,transparent_1px)] bg-[size:22px_22px] opacity-20" />

      {/* SIGNAL BEAM */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#C778DD] to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* LEFT – SIGNAL SOURCE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-wider">
              SIGNAL
              <span className="text-[#C778DD]"> SOURCE</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-sm">
              You’re about to initiate a direct communication channel.
              Let’s build something meaningful.
            </p>
          </div>

          {/* INFO BLOCKS */}
          {[
            {
              icon: FaPhoneAlt,
              label: "Channel",
              value: "+91 73041 85760",
            },
            {
              icon: FaEnvelope,
              label: "Frequency",
              value: "mohdmerajansari76@gmail.com",
            },
            {
              icon: FaMapMarkerAlt,
              label: "Base Location",
              value: "Mumbai, India",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 border-l-2 border-[#C778DD]/40 pl-4"
            >
              <item.icon className="text-[#C778DD] mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {item.label}
                </p>
                <p className="text-gray-300">{item.value}</p>
              </div>
            </motion.div>
          ))}

          {/* SOCIAL */}
          <div className="flex gap-6 pt-6">
            {[FaLinkedin, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.3, rotate: 8 }}
                className="text-2xl text-gray-400 hover:text-[#C778DD]"
                href="#"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CENTER – STATUS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex flex-col items-center justify-center text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-40 rounded-full border border-[#C778DD]/40 flex items-center justify-center"
          >
            <div className="w-24 h-24 rounded-full bg-[#C778DD]/20 blur-xl" />
          </motion.div>
          <p className="text-gray-400 mt-6 text-sm uppercase tracking-widest">
            Awaiting Transmission
          </p>
        </motion.div>

        {/* RIGHT – TRANSMISSION CONSOLE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0B0B0B] border border-white/10 rounded-2xl p-10 relative"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center text-[#C778DD] text-xl font-semibold"
            >
              ✅ Signal Received Successfully
              <p className="text-gray-400 text-sm mt-2">
                I’ll respond shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold tracking-widest mb-6">
                TRANSMISSION PANEL
              </h3>

              <input
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-md focus:border-[#C778DD] outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-md focus:border-[#C778DD] outline-none"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-md focus:border-[#C778DD] outline-none resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#C778DD] hover:bg-[#a85bbf] text-black font-bold py-3 rounded-md tracking-widest"
              >
                TRANSMIT SIGNAL
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
