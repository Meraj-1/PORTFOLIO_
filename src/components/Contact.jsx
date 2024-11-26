import { useState } from "react";

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
    <section id="contact" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto text-center px-6">
        {/* Contact Heading */}
        <h2 className="text-4xl font-bold text-indigo-400 mb-8">Contact Me</h2>

        {submitted ? (
          <div className="text-green-400 text-lg font-medium">
            🎉 Your message has been sent successfully! Thank you for reaching out.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="my-12 border-t border-gray-700 w-3/4 mx-auto"></div>

        {/* Instagram Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Connect with me on Instagram</h3>
          <a
            href="https://www.instagram.com/mohammad.meraj.ansari/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.352 3.608 1.326.975.975 1.265 2.242 1.326 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.352 2.633-1.326 3.608-.975.975-2.242 1.265-3.608 1.326-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.352-3.608-1.326-.975-.975-1.265-2.242-1.326-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.352-2.633 1.326-3.608.975-.975 2.242-1.265 3.608-1.326 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.435.064-2.868.374-3.969 1.475C1.88 2.928 1.57 4.361 1.506 5.796.448 6.939.435 7.387.435 12s.013 5.061.071 6.304c.064 1.435.374 2.868 1.475 3.969 1.101 1.101 2.534 1.411 3.969 1.475 1.242.058 1.69.071 6.304.071s5.061-.013 6.304-.071c1.435-.064 2.868-.374 3.969-1.475 1.101-1.101 1.411-2.534 1.475-3.969.058-1.242.071-1.69.071-6.304s-.013-5.061-.071-6.304c-.064-1.435-.374-2.868-1.475-3.969C20.23.448 18.797.138 17.362.072 16.121.014 15.673 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z" />
            </svg>
            Follow Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
