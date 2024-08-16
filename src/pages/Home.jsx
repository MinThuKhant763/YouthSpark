import React from 'react';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';
import Hero4 from '../components/Hero4';
import Hero5 from '../components/Hero5';
import Hero6 from '../components/Hero6';
import bg from '../assets/images/nuclearbg.jpg'
const Home = () => {
  return (
    <>
          <div className='bg-cover h-screen w-full' style={ { backgroundImage: `url(${ bg })` } }>
              <Hero1 />
          </div>
          <Hero2 />
          <Hero3 />
          <Hero4 />
          <Hero5 />
          <Hero6 />
    </>
  )
}

export default Home
