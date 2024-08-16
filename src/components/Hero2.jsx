import React from 'react'
import smr1 from '../assets/images/smr1.png'
const Hero2 = () => {
  return (
      <div className=' grid grid-cols-2 h-screen bg-black text-white'>
          <div>
              <img className='mx-auto object-cover' src={smr1} alt=""/>
          </div>
          <div className='text-4xl my-auto leading-snug '>
              <div className='border rounded w-fit p-2 mb-4'>01</div>
              <span className='text-emerald-500'> Heat is transferred </span> from <br/>
              the primary coolant through <br/>the walls of the tubes in the steam generator heating the water
          </div>
    </div>
  )
}

export default Hero2
