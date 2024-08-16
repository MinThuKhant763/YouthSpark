import React from 'react'

const AboutCard = () => {
  return (
    
      <div className='h-full flex justify-center items-center mt-8' >
          
          <p></p>
          <a
              className="group relative block max-w-screen-sm mx-auto h-64 sm:h-80 lg:h-96"
              href="#"
          >
              <span className="absolute inset-0 border-2 border-dashed border-black" />
              <div className="relative flex h-full w-60 transform items-end border-2 border-black bg-white transition-transform group-hover:scale-105">
                  <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <i class="fa-solid fa-flag fa-xl"></i>
                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                          Mission
                      </h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                          Mission
                      </h3>
                      <p className="mt-4 text-sm sm:text-base">
                          At YouthSpark, our mission is to lead the way in sustainable energy development by constructing Small Modular Reactors (SMRs) that provide clean, reliable...
                      </p>
                      <p className="mt-8 font-bold">
                          Read more
                      </p>
                  </div>
              </div>
          </a>
          <a
              className="group relative block max-w-screen-sm mx-auto h-64 sm:h-80 lg:h-96"
              href="#"
          >
              <span className="absolute inset-0 border-2 border-dashed border-black" />
              <div className="relative flex h-full w-60 transform items-end border-2 border-black bg-white transition-transform group-hover:scale-105">
                  <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <i class="fa-solid fa-pen text-xl"></i>
                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                          Vision
                      </h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                          Vision
                      </h3>
                      <p className="mt-4 text-sm sm:text-base">
                          Our vision is to be the driving force behind Myanmar’s transition to a sustainable energy future. We aspire to become a trusted leader in the construction of SMRs...
                      </p>
                      <p className="mt-8 font-bold">
                          Read more
                      </p>
                  </div>
              </div>
          </a>
          <a
              className="group relative block max-w-screen-sm mx-auto h-64 sm:h-80 lg:h-96"
              href="#"
          >
              <span className="absolute inset-0 border-2 border-dashed border-black" />
              <div className="relative flex h-full w-60 transform items-end border-2 border-black bg-white transition-transform group-hover:scale-105">
                  <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <i class="fa-solid fa-heart fa-xl"></i>
                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                          Values
                      </h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                          Values
                      </h3>
                      <p className="mt-4 text-sm sm:text-base">
                          Integrity: We are committed to providing accurate and transparent information.
                          Innovation: We embrace new ideas and technologies ...
                      </p>
                      <p className="mt-8 font-bold">
                          Read more
                      </p>
                  </div>
              </div>
          </a>
    </div>
  )
}

export default AboutCard
