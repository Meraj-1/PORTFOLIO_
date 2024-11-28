const Projects = () => {
    const projects = [
      {
        name: "ZERODHA",
        description: "A modern trading platform clone built with React.",
        link: "https://zerodhaclonefivne.vercel.app/",
      },
      {
        name: "REAL-ESTATE",
        description: "A sleek real estate website with responsive design.",
        link: "https://real-estate-henna-nine.vercel.app/",
      },
      {
        name: "E-COMMERCE",
        description: "An e-commerce platform with dynamic product listings.",
        link: "https://ecomerce-web-six.vercel.app/",
      },
      // {
      //   name: "KITE",
      //   description: "A dashboard clone featuring interactive data visualization.",
      //   link: "https://dashboardclone.vercel.app/",
      // },
    ];
  
    return (
      <section
        id="projects"
        className="relative bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white py-20 overflow-hidden"
      >
        {/* Background Glows */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 blur-[200px] opacity-50"></div>
          <div className="absolute -bottom-16 right-10 w-96 h-96 bg-indigo-500 blur-[250px] opacity-40"></div>
        </div>
  
        <div className="relative  container mx-auto px-6">
          {/* Heading */} 
          <h2 className="text-6xl flex items-center justify-center font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-16">
            My Masterpiece Projects
          </h2>
  
          {/* Projects Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group bg-[#1E293B] border border-gray-700 rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:scale-[1.03] transform transition-transform duration-500"
              >
                {/* Content Section */}
                <h3 className="text-3xl animate-text font-bold text-center text-gray-200 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-300 animate-text text-lg font-light mb-6 tracking-wide">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block   bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
                >
                  View Project
                </a>
  
                {/* Floating Project Index */}
                <div className="absolute  top-6 left-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-lg w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                  #{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Decorative Footer */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
      </section>
    );
  };
  
  export default Projects;
  