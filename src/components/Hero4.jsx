import React from 'react'
import coolingtower from '../assets/images/coolingtower.jpg'
const Hero4 = () => {
  return (
      <div className=' grid grid-cols-2 h-screen bg-black text-white'>
          <div className='m-auto'>
              <img src={coolingtower} alt="" />
          </div>
          <div className='text-4xl m-auto leading-snug '>
              <div className='border rounded w-fit p-2 mb-4 '>03</div>
              <span className='text-emerald-500'> Colder (denser) </span> primary<br />
              coolant "falls" to bottom of <br />reactor pressure vessel,<br />cycle continues
          </div>
      </div>
  )
}

export default Hero4
