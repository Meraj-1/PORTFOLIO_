import React from 'react'

const Heading = ({text1}) => {
  return (
    <div className='inline-flex gap-2 item-center mb-3'>
      <p className='text-gray-500 text-6xl'>{text1}</p>
      <p className='sm:w-28 h-[3px] inline-flex  pt-10 bg-pink-400'></p>
    </div>
  )
}

export default Heading