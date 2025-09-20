import React from 'react'
import './styles/Resume.css'
import Button from './Button.jsx'
const Resume = () => {
  return (
    <div className='resume' style={{ backgroundColor: "rgb(34, 34, 34)"}}>
      <div className="text-center">
        <div className="card-header">
          My Resume
        </div>
        <div className="card-body" style={{ backgroundColor: "rgb(34, 34, 34)"}} >
          <p className="card-text">Checkout my resume for additional details.</p>
          <div className="resume-button">
          <a className="resume-link" target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1ESH_CCs6UW_-W_oezJIc9hYwc_KMMKdu/view?usp=drive_link">
            <Button text={'Click Here'} />
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
