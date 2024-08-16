import React from 'react'
import power from '../assets/images/power.jpg'

const Hero6 = () => {
  return (
   
      <div className='grid grid-cols-2 h-screen bg-black text-white'>
          <div className='m-auto'>
              <div><span className='text-9xl'>77</span> <span className='text-5xl'>MWe</span></div>
              <div className='text-xl mt-10'>Our SMR technology generates 77 megawatts of <br /> electricity, resulting in a total gross output of 924<br /> MWe for our flagship VOYGR-12 power plant</div>
          </div>
              <div className='m-auto'>
                  <img src={power}  alt="" />
              </div>
              
          </div>
  )
}

export default Hero6
