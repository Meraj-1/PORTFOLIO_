import React from 'react'

const Hero = () => {
  return (
<div className='px-3 mt-20 pt-10'>
  <div className='flex flex-col sm:px-10 md:px-20 lg:px-40'>
    <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl topic_head animate-text font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-8 sm:mb-12 md:mb-16">
      Hi, I'm MERAJ ANSARI
    </h2>
    <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl topic_head animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-2 sm:mb-4">
      A Passionate Software Developer
    </h2>
    <h2 className='text-2xl sm:text-2xl md:text-2xl lg:text-3xl topic_head animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 mb-6 sm:mb-10'>
      "The software we create today defines the world of tomorrow."
    </h2>

    <div className='flex flex-col'>
      <a className='font-medium text-purple-900 text-xl'>Gmail : mohdmerajansari76@gmail.com</a>
      <a className='font-medium text-purple-900 text-xl' href='https://www.instagram.com/vue_code/'>Instagram : vue_code</a>
      <a className='font-medium text-purple-900 text-xl' href='https://github.com/Meraj-1'>GitHub : vue_code</a>
    </div>
  </div>

  <div className='mt-4 flex md:px-20 sm:px-10   lg:px-40'>
    <button className='bg-purple-600 text-white font-bold text-lg py-3 px-6 rounded-md transition-all duration-300 hover:bg-purple-700 '>
      <a href="#contact" className=" text-center">CONTACT ME</a>
    </button>
  </div>
</div>


  )
}

export default Hero;



// 