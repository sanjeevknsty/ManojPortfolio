import React from 'react'
import './styles/Sidebar.css'


import { ReactComponent as Github } from './images/main/icons8-github.svg'
import { ReactComponent as Insta } from './images/main/icons8-instagram.svg'
import { ReactComponent as Gmail } from './images/main/gmail-svgrepo-com.svg'
import { ReactComponent as Leetcode } from './images/main/leetcode-svgrepo-com.svg'
import { ReactComponent as Linkedln } from './images/main/internet-linkedln-media-svgrepo-com.svg'



import { Link, animateScroll as scroll } from 'react-scroll';


// import { Link } from 'react-router-dom'
const Sidebar = ({event}) => {


  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <nav className={event ?  "nav1-active" : "nav1" }>
        
          {/* <div className="container-side"  > */}
            <ul className="content-main" >
              <li className="item-side">
                <Link className="link"  activeClass='active' smooth={true} to="/" offset={0} duration={500} spy={true} onClick={scrollToTop}>Home</Link>
              </li>
              <li className="item-side" >
                <Link className="link" activeClass='active' smooth={true} to="ski" offset={0} duration={500} spy={false}>Skills</Link>
              </li>
              <li className="item-side" >
                <Link className="link" activeClass='active' smooth={true} to="exp" offset={0} duration={500} spy={true}>Experience</Link>
              </li>
            
              <li className="item-side">
                <Link className="link" activeClass='active' smooth={true} to="project" offset={0} duration={500} spy={true}>Projects</Link>
              </li>
              <li className="item-side">
                <Link className="link" activeClass='active' smooth={true} to="certificates" offset={0} duration={500} spy={true}>Certificates</Link>
              </li>
              <li className="item-side">
                <Link className="link" activeClass='active' smooth={true} to="about" offset={0} duration={500} spy={true}>Contact</Link>
              </li>
            </ul>

            <ul className= "sidebar-media">
           
              <li className="item-media">
                <a className="link-media" rel="noreferrer"  target='_blank' href="https://github.com/manoj-aerlync"><Github fill='#ccc' width="100%" height="100%" /></a>
              </li>
             
              <li className="item-media">
                <a className="link-media" rel="noreferrer"  target='_blank' href="/"><Gmail fill="#ccc" width="100%" height="100%" /></a>
              </li>
              <li className="item-media">
                <a className="link-media" rel="noreferrer"  target='_blank' href="https://www.linkedin.com/in/manoj-kumar-k-2740b9246/"><Linkedln fill="#ccc" width="100%" height="100%" /></a>
              </li>

            </ul>
      </nav>
    </div>
  )
}

export default Sidebar
