import React from 'react'

import BenefitsCard from './BenefitsCard';
import TextScroll from './textScroll';
const Benefits = () => {
    return (
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className='container h-screen text-white text-center'>
                <div className='text-5xl pt-20'>The Importance of Small Modular Reactors</div>
                <div className='text-xl py-8'>Small Modular Reactors (SMRs), are increasingly important for several reasons:
                </div>
                <BenefitsCard />
                < TextScroll />
            </div>
      </div>
   
  )
}

export default Benefits
