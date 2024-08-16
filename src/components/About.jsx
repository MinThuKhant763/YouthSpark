import React from 'react'
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className=''>
          <div className=' text-center pt-28'>
              <h1 className='text-white text-3xl mb-4'>About Us </h1>
              <p className='mx-auto text-white text-lg w-1/2'>Welcome to <span className='text-sky-500'>YouthSpark</span> , your trusted source for information on small power reactors in Myanmar. We are dedicated to providing accurate, up-to-date, and comprehensive insights into the role of small power reactors in meeting Myanmar's growing energy needs.</p>
          </div>
          <AboutCard/>
    </div>
  )
}

export default About
