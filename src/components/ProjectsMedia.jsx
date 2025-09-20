import React from 'react'
import './styles/ProjectMedia.css'
import img from './images/mockups/macbook 3.png'

const ProjectsMedia = () => {
  return (
    <div className='projectCards'>
    <div className='card-container'>
      <div className="card">
        <img src={img} alt="project4" className="card-img-top"/>
        <div className="card-body">
          <div className="description-media">
          <div className="tittle-media">IoT Therapy Device – Low Power BLE Multi-Connect Firmware</div>
                                    {/* <ul className='project-skills'>
                                        <li>React.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDb</li>
                                        <li>CNN</li>
                                        <li>Python</li>
                                        <li>DeepLearning</li>
                                    </ul> */}
                                    <div className="info-media">
                                         
                                         <div>• Designed firmware with dynamic BLE roles (dock as central, modules as peripherals, mobile 
                                        switching roles during DFU) enabling multi-device GATT communication with optimized low
                                        power performance.
                                         </div>
                                        <div>• Managed device logic using state machines, multithreading, and event-driven programming for responsive operation.
                                         </div>
                                        <div>• Controlled peripherals via PWM, timers, work queues, and enabled secure firmware upgrades (MCUboot).
                                         </div>
                                         <div>• Integrated sensors(Hall, accelerometer, fuel gauge) for monitoring and power optimization.
                                         </div>
                                    </div>
          </div>
         </div>
      </div>
      <div className="card">
        <img src={img} alt="project4" className="card-img-top"/>
        <div className="card-body">
          <div className="description-media">
            <div className="tittle-media"> Atmosic IDE</div>
                                    {/* <ul className='project-skills'>
                                        <li>React.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDb</li>
                                        <li>RestAPI</li>
                                        <li>Cloudinary</li>
                                        <li>Socket.io</li>

                                    </ul> */}
                                    <div className="info-media"> 
                                        <div>• Built a custom IDE workflow for Atmosic development with simplified west commands and automated build/flash/debug setup.
                                        </div>
                                        <div>• Added GDB UI controls with thread state visibility and enabled remote SSH debugging on hardware.
                                        </div>
                                        <div>• Developed and packaged TypeScript IDE extensions (VSIX) for easy installation
                                        </div>
                                    </div>
          </div>
         </div>
      </div>
   
    </div>
</div>
  )
}

export default ProjectsMedia
