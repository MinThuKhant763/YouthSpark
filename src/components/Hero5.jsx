import React from 'react'
import thermal from '../assets/images/thermal.jpg'
const Hero5 = () => {
  return (
    <div className='grid grid-cols-2 h-screen bg-black text-white'>
          <div className='m-auto'>
              <img src={ thermal } alt="" />
          </div>
          <div className='m-auto'> 
              <div className='mb-4'>Thermal capacity</div>
              <div><span className='text-9xl'>250</span> <span className='text-5xl'>MWe</span></div>
              <div className='text-xl mt-10'>Premised on well-established nuclear technology <br/> principles with a focus on integration of <br/> components simplification or elimination of<br/> systems, and use of passive safety features</div>
          </div>
    </div>
  )
}

export default Hero5
