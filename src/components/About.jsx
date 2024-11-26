const About = () => (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600 blur-[200px] opacity-40"></div>
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
          <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Hi, I'm a passionate web developer with expertise in HTML, CSS,
            JavaScript, React, and TailwindCSS. I specialize in creating
            responsive, interactive, and visually appealing user interfaces.
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            My goal is to build web experiences that are both functional and
            aesthetic, while ensuring optimal performance and accessibility.
          </p>
  
          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Skills</h3>
            <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
              {['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS'].map((skill, index) => (
                <li
                  key={index}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 rounded-full text-sm text-white font-medium shadow-md transform hover:scale-105 transition-transform duration-300"
                >
                  {skill}
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
  