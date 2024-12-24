import { assets } from "../assests/assests.js";

const About = () => (
  <section
    id="about"
    className="mt-10 relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20"
  >
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute-top-20 left-20 w-72 h-72 bg-purple-600 blur-[200px] opacity-40"></div>
      <div className="absolute bottom-0 right-20 w-96 h-96 bg-indigo-500 blur-[250px] opacity-40"></div>
    </div>

    <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
      {/* Profile Image */}
      <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-gradient-to-br from-indigo-500 to-purple-600 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Content */}
      <div className="text-center md:text-left">
        <h2 className="text-5xl animate-text font-extrabold mb-6 text-transparent bg-clip-text ">
          About Me
        </h2>
        <p className="text-lg  leading-relaxed mb-6 text-gray-300">
          Hi, I'm a passionate web developer with expertise in HTML, CSS,
          JavaScript, React, and TailwindCSS. & Bootstrap I specialize in creating
          responsive, interactive, and visually appealing user interfaces.
        </p>
        <p className="text-lg  leading-relaxed text-gray-400">
          My goal is to build web experiences that are both functional and
          aesthetic, while ensuring optimal performance and accessibility.
        </p>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Skills</h3>
          <ul className="flex flex-wrap gap-6 justify-center md:justify-start">
            {[
              { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
              { name: 'JavaScript', image: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
              { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', animate: true },
              { name: 'Mongo DB', image: 'https://icon.icepanel.io/Technology/svg/MongoDB.svg'},
              { name: 'Java', image: 'https://brandeps.com/logo-download/J/Java-logo-vector-01.svg'},
              { name: 'TailwindCSS', image: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
              {name: 'Bootstrap', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png'},
              {name: 'GitHub', image: "https://cdn-icons-png.flaticon.com/512/25/25231.png"}
            ].map((skill, index) => (
              <li key={index} className="flex flex-col items-center gap-2 group">
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-900 rounded-full p-2 shadow-md transform hover:scale-110 transition-transform duration-300 ${
                    skill.name === 'React' ? 'rotateReact' : ''
                  }`}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-indigo-400 transition-colors duration-300 font-medium">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Decorative Footer Gradient */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent"></div>
  </section>
);

export default About;
