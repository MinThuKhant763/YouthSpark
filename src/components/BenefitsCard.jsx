import React from 'react'

const BenefitsCard = () => {
  return (
      /* From Uiverse.io by sigitsurya7 */
      <div class="grid grid-cols-5 gap-4 text-black">
          <div
              class="card w-56 hover:shadow-none items-center h-max bg-blue-200 border-4 border-black rounded-lg shadow-[4px_4px_0px_rgb(0,0,1)] dark:shadow-[4px_4px_0px_rgb(255,255,255)] dark:border-white"
          >
              <div class=" px-6 py-5 text-left h-full">
                  <p class="text-base mb-4"><i class="fa-solid fa-lightbulb"></i></p>
                  <h1 class="text-2xl mb-4">Energy Security and Decentralization</h1>
                  <p class="text-xs mb-4 line-clamp-4">
                      Decentralized Power Generation : Small nuclear plants can be deployed closer to where electricity is needed, reducing reliance on large, centralized power plants. This decentralization enhances energy security and reduces transmission losses.
                  </p>
                  <strong class="cursor-pointer">Read More</strong>
              </div>
          </div>
          <div
              className="card w-56 hover:shadow-none items-center h-max bg-green-200 border-4 border-black rounded-lg shadow-[4px_4px_0px_rgb(0,0,1)] dark:shadow-[4px_4px_0px_rgb(255,255,255)] dark:border-white"
          >
              <div className="px-6 py-5 text-left h-full">
                  <p className="text-base mb-4"><i class="fa-solid fa-coins"></i></p>
                  <h1 className="text-2xl mb-4">Lower Initial Costs and Economic Flexibility</h1>
                  <p className="text-xs mb-4 line-clamp-4">
                      Reduced Capital Investment : The smaller size and modular construction of these plants lower the initial capital requirements, making nuclear energy more accessible to a wider range of regions and countries.
                  </p>
                  <strong class="cursor-pointer">Read More</strong>
              </div>
          </div>
          <div
              class="card w-56 hover:shadow-none items-center h-max bg-yellow-200 border-4 border-black rounded-lg shadow-[4px_4px_0px_rgb(0,0,1)] dark:shadow-[4px_4px_0px_rgb(255,255,255)] dark:border-white"
          >
              <div class="px-6 py-5 text-left h-full">
                  <p class="text-base mb-4"><i class="fa-solid fa-shield"></i></p>
                  <h1 class="text-2xl mb-4">Enhanced Safety</h1>
                  <p class="text-xs mb-4 line-clamp-4">
                      Advanced Safety Features : SMRs often incorporate passive safety systems, which rely on natural processes like gravity and convection to cool the reactor, reducing the risk of accidents.
                  </p>
                  <strong class="cursor-pointer">Read More</strong>
              </div>
          </div>
          <div
              class="card w-56 hover:shadow-none items-center h-max bg-red-200 border-4 border-black rounded-lg shadow-[4px_4px_0px_rgb(0,0,1)] dark:shadow-[4px_4px_0px_rgb(255,255,255)] dark:border-white"
          >
              <div class="px-6 py-5 text-left h-full">
                  <p class="text-base mb-4"><i class="fa-solid fa-seedling"></i></p>
                  <h1 class="text-2xl mb-4">Environmental Benefits</h1>
                  <p class="text-xs mb-4 line-clamp-4">
                      Low Carbon Emissions : Like all nuclear power, SMRs produce minimal greenhouse gas emissions, contributing to efforts to combat climate change.
                      Waste Management: Smaller reactors can be designed to produce less nuclear waste, and some designs aim to use waste from larger reactors as fuel, further reducing the environmental impact.
                  </p>
                  <strong class="cursor-pointer">Read More</strong>
              </div>
              
          </div>
          <div
              class="card w-56 hover:shadow-none items-center h-max bg-violet-200 border-4 border-black rounded-lg shadow-[4px_4px_0px_rgb(0,0,1)] dark:shadow-[4px_4px_0px_rgb(255,255,255)] dark:border-white"
          >
              <div class=" px-6 py-5 text-left h-full">
                  <p class="text-base mb-4"><i class="fa-solid fa-screwdriver-wrench"></i></p>
                  <h1 class="text-2xl mb-4">Versatility in Applications</h1>
                  <p class="text-xs mb-4 line-clamp-4">
                      Industrial Use : They can provide heat and power for industrial processes, desalination, and hydrogen production, supporting a diverse range of applications.
                  </p>
                  <strong class="cursor-pointer">Read More</strong>
              </div>
          </div>
      </div>

  )
}

export default BenefitsCard
