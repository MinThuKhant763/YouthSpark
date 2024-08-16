import React from 'react';
import './Environment.css';
import ayy from '../assets/images/aya.jpg';
import sgg from '../assets/images/sgg.jpg';
import shan from '../assets/images/shan.jpg';
import tni from '../assets/images/tni.jpg';
const Environment = () => {
    return (
        <div className="inset-0 -z-10 h-full w-full items-center px-5 py-12 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className='text-white text-5xl text-center my-10' >
                Ideal Location for SMRs Construction
            </div>
            <div className='grid grid-cols-2'>
                <div className="notification ml-12 mb-4">
                    <div className="notiglow"></div>
                    <div className="notiborderglow"></div>
                    <div className="notititle">Areas with minimal environmental impact</div>
                    <div className="notibody">Since nuclear reactors can have an impact on the environment and nature, only locations where environmental impact will be minimal should be chosen.</div>
                </div>
                <div className="notification ml-12 mb-4">
                    <div className="notiglow"></div>
                    <div className="notiborderglow"></div>
                    <div className="notititle">Water supply</div>
                    <div className="notibody">Nuclear reactors require water for cooling, so the selected location must have a sufficient and reliable water supply.</div>
                </div>

                <div className="notification ml-12 mb-4 ">
                    <div className="notiglow"></div>
                    <div className="notiborderglow"></div>
                    <div className="notititle">Distance from populated areas</div>
                    <div className="notibody">The location should be away from densely populated areas to ensure that, in case of emergencies, there will be minimal impact on the general population.
                    </div>
                </div>
                <div className="notification ml-12 ">
                    <div className="notiglow"></div>
                    <div className="notiborderglow"></div>
                    <div className="notititle">Areas with low risk of earthquakes and natural disasters</div>
                    <div className="notibody">The plant should not be built in earthquake-prone regions, and the risk of other natural disasters should also be avoided.
                    </div>
                </div>
                <div className="notification ml-12 ">
                    <div className="notiglow"></div>
                    <div className="notiborderglow"></div>
                    <div className="notititle">Human safety and security</div>
                    <div className="notibody"> The location selection must align with the country's security policies and ensure the safety of the public.
                    </div>
                </div>

            </div>
            <div className='text-xl text-white text-center mt-5'>
                Based on these factors, it is crucial to choose locations in Myanmar that have ample water resources and are relatively distant from populated areas.
            </div>
            <div className='text-white text-center my-3 animate-bounce animate-infinite'>
                <i className="fa-solid fa-arrow-down"></i>
            </div>
            <hr />
            <div className='text-5xl text-white text-center mt-12 mb-12'>
                Potential SMRs Location in Myanmar
            </div>
            <div className='text-white text-left text-xl mb-12'>
                In Myanmar, selecting a location for constructing a nuclear power plant requires careful consideration of several factors, including environmental, social, and safety concerns. Based on these key considerations, the following areas might be suitable :
            </div>
            <div className='grid grid-cols-2'>
                <div className='text-white p-12 text-left'>
                    <p className='text-3xl mb-6'>Ayeyarwady Region (near Pathein) : </p>
                    <p className='text-xl mb-2'> <i className="fa-solid fa-check text-emerald-400"></i>   There is ample water supply from the rivers.   </p>
                    <p className='text-xl'>   <i className="fa-solid fa-check text-emerald-400"></i> This area has an agricultural-based economy, and choosing locations away from densely populated areas, like the river delta regions, can minimize the impact on communities.</p>
                </div>
                <div className='mb-6'>
                    <img src={ ayy } alt="" />
                </div>
                <div className='text-white p-12 text-left'>
                    <p className='text-3xl mb-6'> Sagaing Region :   </p>
                    <div>
                        <p className='text-xl mb-2'><i className="fa-solid fa-check text-emerald-400"></i> With access to major rivers like the Ayeyarwady, it offers abundant water resources.
                        </p>
                        <p className='text-xl'><i className="fa-solid fa-check text-emerald-400"></i> There are several sparsely populated areas, which is ideal for safety concerns.</p>
                    </div>
                </div>
                <div className='mb-6'>

                    <img src={ sgg } alt="" />

                </div>
                <div className='text-white p-12 text-left'>
                    <p className='text-3xl mb-6'> Shan State :  </p>
                    <p className='text-xl mb-2'><i className="fa-solid fa-check text-emerald-400"></i> This area has remote locations where environmental impact can be minimized.  </p>
                    <p className='text-xl'><i className="fa-solid fa-check text-emerald-400"></i> It’s relatively far from large population centers, reducing the potential risk to communities.</p>
                </div>
                <div className='mb-6'>
                    <img src={ shan } alt="" />
                </div>
                <div className='text-white p-12 text-left'>
                    <p className='text-3xl mb-6'> Tanintharyi Region :   </p>
                    <p className='text-xl mb-2'><i className="fa-solid fa-check text-emerald-400"></i>  This region has sufficient water resources and is relatively free from natural disasters such as earthquakes and wildfires.  </p>
                    <p className='text-xl'> <i className="fa-solid fa-check text-emerald-400"></i> Its distance from densely populated areas makes it safer for large-scale industrial projects.</p>
                </div>
                <div>
                    <img src={ tni } alt="" />
                </div>

            </div>
        </div>



    );
};

export default Environment;
