import React from 'react';
import design from '../assets/images/design.jpg'
import dev from '../assets/images/dev.jpg'
import digital from '../assets/images/digital.webp'
import decommission from '../assets/images/decommission.jpg'
const Technocard = () => {
  return (
      <div className='flex flex-row gap-5 mt-12 overflow-auto'>
          <div>
  /* From Uiverse.io by Yaya12085 */{ ' ' }
              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
                      <img className='w-full h-full' src={design} alt="" />
                  </div>
                  <div className="p-6">
                      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          Design: Choosing the Right Locations and Technology
                      </h5>
                      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                          Pick Safe and Stable Locations: Choose areas with low earthquake and flood risks, like flat lands far from major fault lines. Also, consider placing plants near places where electricity is most needed, such as industrial zones...
                      </p>
                  </div>
                  <div className="p-6 pt-0">
                      <button
                          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          data-ripple-light="true"
                          type="button"
                      >
                          Read More
                      </button>
                  </div>
              </div>
          </div>
          <div>
  /* From Uiverse.io by Yaya12085 */{ ' ' }
              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                      <img className='w-full h-full' src={ dev } alt="" />
                  </div>
                  <div className="p-6">
                      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          Deployment: Building and Installing the Plants
                      </h5>
                      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                          Upgrade Local Infrastructure: Improve roads and ports to transport the necessary materials and equipment to the plant sites.
                          Train Local Workers: Provide training for local people to operate and maintain the plants, ensuring ...
                      </p>
                  </div>
                  <div className="p-6 pt-0">
                      <button
                          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          data-ripple-light="true"
                          type="button"
                      >
                          Read More
                      </button>
                  </div>
              </div>
          </div>
          <div>
  /* From Uiverse.io by Yaya12085 */{ ' ' }
              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                      <img className={"h-full w-full"} src={digital} alt="" />
                  </div>
                  <div className="p-6">
                      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          Digitalization: Using Technology to Manage the Plants
                      </h5>
                      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                          Monitor the Plants Remotely: Install sensors and cameras to keep track of plant operations from a central control room. This allows for quick responses to any issues...
                      </p>
                  </div>
                  <div className="p-6 pt-0">
                      <button
                          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          data-ripple-light="true"
                          type="button"
                      >
                          Read More
                      </button>
                  </div>
              </div>
          </div>
          <div>
  /* From Uiverse.io by Yaya12085 */{ ' ' }
              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                     <img className='h-full w-full' src={decommission} alt="" />
                  </div>
                  <div className="p-6">
                      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          Decommissioning: Planning for the End of the Plant’s Life
                      </h5>
                      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                          Plan for Safe Shutdown: From the beginning, have a plan for safely shutting down and dismantling the plant when it’s no longer in use.
                          Manage Waste Properly: Store any nuclear waste in secure, specially designed ...
                      </p>
                  </div>
                  <div className="p-6 pt-0">
                      <button
                          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          data-ripple-light="true"
                          type="button"
                      >
                          Read More
                      </button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Technocard
