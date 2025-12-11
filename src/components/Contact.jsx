"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
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
    <section
      id="contactus"
      className="w-full bg-[#0A0A0A] text-white py-28 px-8 flex flex-col items-center pb-12 relative overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto mb-12 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#C778DD] mb-4">Contact Us</h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Any questions or remarks? Just write us a message
        </p>
      </div>

      <div className="max-w-5xl w-full bg-[#111111] rounded-2xl shadow-lg overflow-hidden mx-auto">
        <div className="flex flex-col md:flex-row w-full">
          <div className="relative md:w-[400px] bg-gradient-to-b from-[#111111] to-[#1a1a1a] p-10 flex flex-col justify-between overflow-hidden">
            <div className="absolute -bottom-20 -right-16 pointer-events-none">
              <div className="w-48 h-48 bg-[#484848]/10 rounded-full"></div>
              <div className="absolute -top-4 -left-2 w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full z-10"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-2 text-white">Contact Information</h2>
              <p className="text-gray-400 mb-8">
                Get In Touch! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>

              <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4 gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 md:mb-0">
                  <FaPhoneAlt className="text-[#C778DD] text-sm" />
                </div>
                <div>
                  <span className="block text-gray-400 text-lg mb-1">+91 73048 80427</span>
                </div>
              </div>

              <br />

              <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4 gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 md:mb-0">
                  <FaEnvelope className="text-[#C778DD] text-sm" />
                </div>
                <div>
                  <span className="block text-gray-400 text-lg mb-1">info@clicktrick.in</span>
                </div>
              </div>

              <br />

              <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4 gap-3 text-center md:text-left">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 md:mb-0 shrink-0">
                  <FaMapMarkerAlt className="text-[#C778DD] text-sm" />
                </div>
                <div className="max-w-[280px] md:max-w-none">
                  <span className="block text-gray-400 text-sm mb-2 md:mb-0">C/202, Suha Apartment</span>
                  <span className="block text-gray-400 text-sm leading-relaxed">
                    Opp. Bhraman Society, Syndicate, Kalyan West, Maharashtra 421301
                  </span>
                </div>
              </div>

              <div className="flex justify-center md:justify-start gap-6 mt-[7rem] mb-4 text-xl">
                <a href="#" className="hover:text-[#C778DD] transition"><FaTwitter /></a>
                <a href="#" className="hover:text-[#C778DD] transition"><FaInstagram /></a>
                <a href="#" className="hover:text-[#C778DD] transition"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          <div className="md:w-[700px] bg-[#0A0A0A] p-10">
            {submitted ? (
              <div className="text-green-400 text-lg font-medium text-center">
                🎉 Your message has been sent successfully! Thank you for reaching out.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:border-[#C778DD] outline-none transition"
                      required
                    />
                  </div>
                  <div className="md:pl-12">
                    <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:border-[#C778DD] outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                      className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:border-[#C778DD] outline-none transition"
                      required
                    />
                  </div>
                  <div className="md:pl-12">
                    <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:border-[#C778DD] outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Select Subject</label>
                  <div className="flex flex-wrap justify-between border-gray-600 text-gray-300">
                    {["General Inquiry", "Feedback", "Business Inquiry", "Support"].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-300 hover:text-[#C778DD] transition-all"
                      >
                        <input
                          type="radio"
                          name="subject"
                          value={option}
                          defaultChecked={option === "General Inquiry"}
                          className="accent-[#C778DD] w-4 h-4"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:border-[#C778DD] outline-none transition resize-none"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full md:w-[214px] h-[54px] bg-[#C778DD] hover:bg-[#C778DD] border-2 border-black hover:border-[#f97316] text-white font-semibold text-lg px-8 py-[15px] rounded-[8px] shadow-2xl hover:shadow-black/50 transition-all duration-300 flex items-center justify-center gap-2 ml-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
