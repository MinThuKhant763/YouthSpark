import React from 'react'
import Technocard from './Technocard';
const Technology = () => {
  return (
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pt-12">
          <div>
              <p className='text-white text-center text-4xl pt-12'>Key Steps for Implementing Small Nuclear Power Plants in Myanmar</p>
              <div>
                  <Technocard />
             </div>
         </div>
      </div>
      
  )
}

export default Technology
