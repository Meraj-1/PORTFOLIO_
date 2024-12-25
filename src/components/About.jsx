// import { icon } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "../assests/assests.js";

const About = () => (
  <section
    id="about"
    className="mt-10 relative bg-gradient-to-b  text-black py-20"
  >
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute-top-20 left-20 w-72 h-72 bg-purple-600 blur-[200px] opacity-40"></div>
      <div className="absolute bottom-0 right-20 w-96 h-96 bg-indigo-500 blur-[250px] opacity-40"></div>
    </div>

    <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
      {/* About Content */}
      <div className="text-center md:text-left">
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl topic_head animate-text flex items-center justify-center font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-16">
        "Turning Ideas into Reality"
          </h2>
          <div className="flex flex-col gap-2 lg:flex-row justify-between  sm:space-y-4">
  <img className="w-full lg:w-1/2 mb-4 md:mb-0" src={Icon[9]} alt="icon" />

  <div className="text-lg  leading-relaxed  text-black w-full">
  <h3 className="font-bold text-start">Transforming Concepts into Functional Solutions</h3>
  <p className="text-start mb-4">Developers turn abstract ideas into tangible applications by writing efficient, scalable code that meets real-world needs.</p>  
  <h3 className="font-bold text-start">Crafting User-Centric Experiences</h3>
  <p className="text-start mb-4">Developers design intuitive interfaces, ensuring that complex systems are accessible and easy to use for everyone.</p>  
  <h3 className="font-bold text-start">Implementing Scalable Solutions</h3>
  <p className="text-start mb-4">Developers design and implement efficient algorithms and data structures to optimize performance and reduce latency.</p>
  <h3 className="font-bold text-start">Ensuring Seamless Integration and Scalability</h3>
  <p className="text-start">Developers build scalable and maintainable solutions, ensuring they can adapt to evolving user needs and business growth.</p>
  </div>

  
</div>




        {/* Skills Section */}
        <div className="mt-40 mb-20 ">
          {/* <h3 className="text-2xl font-semibold mb-4  text-purple-500">Skills</h3> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl topic_head animate-text flex items-center justify-center font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-16">
          My Arsenal of Technologies
          </h2>
          <ul className="flex flex-wrap gap-6  sm:gap-10   justify-center items-center ">
            {[
              {name: 'HTML', image: Icon[0]}, 
              {name: 'CSS', image: Icon[1]},
              {name: 'JavaScript', image: Icon[2]},
              {name: 'React', image: Icon[3] ,animate: true},
              {name: 'Java', image: Icon[4]},
              {name: 'Mongo DB', image:Icon[5]},
              {name: 'GitHub', image: Icon[6]},
              {name: 'Bootstrap', image: Icon[7]},
              {name: 'TailwindCSS', image: Icon[8]}
            ].map((skill, index) => (
              <li key={index} className="flex flex-col items-center gap-2 group">
                <div 
  className={`relative w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
   rounded-full p-2 shadow-md transform hover:scale-110 transition-transform duration-300 ${
    skill.name === 'React' ? 'rotateReact' : ''
  }`}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-md text-black group-hover:text-indigo-400 transition-colors duration-300 font-medium">
                  {skill.name}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Decorative Footer Gradient */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-purple-300 to-transparent"></div>
  </section>
);

export default About;
