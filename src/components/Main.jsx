import React, { useEffect ,useState} from 'react';
import './styles/Main.css'
import Header from './Header';
import Button from './Button';
import Sidebar from './Sidebar';
import { Link } from 'react-scroll';
// import { ReactComponent as Image } from './images/main/web-development-svgrepo-com.svg'
const Main = () => {
  const [event , setEvent] = useState(false)

  const handleEvent = (newEvent) => {
    setEvent(newEvent);
  };
  useEffect(() => {
    window.myFunction()
  }, [])
  return (
    <>

      <Sidebar event={event}  />
      <Header event={event} setEvent={handleEvent} />
      <div className='main-content'>
        <div className='container'>
          {/* <div className="bubbles" id="wrapper-canvas"></div> */} 
          {/* UNCOMMMENT  */}

          <div className='text-container'>
            {/* <div className='first-text'>HI I'M</div> */}
            <div className='second-text' style={{fontFamily:'"Orbitron", sans-serif'}}>KONISETTY MANOJ KUMAR</div>
            <div className='third-text'  style={{fontFamily:'"Orbitron", sans-serif'}}>
              <p>Embedded Software Engineer</p>
               Embedded Software Engineer with 1.5 years of experience in Zephyr RTOS, BLE, and embedded 
systems development. 
{/* Worked with different SoCs and hardware platforms, including Atmosic series, 
nRF series and ESP series, focusing on software validation, debugging, and feature integration. */}
</div>
          </div>

          <div className="scrollButton">
           <Link  activeClass='active' smooth={true} to="ski" offset={0} duration={500} spy={true} > <Button text={'scroll Here'} /> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
