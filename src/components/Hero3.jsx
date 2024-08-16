import React from 'react'
import smr2 from '../assets/images/smr2.png'
const Hero3 = () => {
  return (
      <div className=' grid grid-cols-2 h-screen bg-black text-white'>
          <div className='text-4xl m-auto leading-snug'>
              <div className='border rounded w-fit p-2 mb-4'>02</div>
              <span className='text-emerald-500'> Energy from nuclear </span> reaction <br />
              heats primary reactor coolant <br />causing it to rise by convection <br /> and natural buoyancy
          </div>
          <div>
              <img className='mx-auto' src={smr2} alt="" />
          </div>
         
      </div>
  )
}

export default Hero3
