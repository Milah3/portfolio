import React from 'react'
import './introduction.css'

const Introduction = () => {
  return (
    <div className='introduction'>

      <div className="row intro">
        <div>

      <h1>Hi there.</h1>
      <p>Welcome to my portfolio</p>
      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFWXSa18HEA8A/profile-displayphoto-shrink_800_800/0/1661300912204?e=2147483647&v=beta&t=y-Hfa1iRr-lShmYy4kskJzBmB0VP_lAIGNH8obKqyHo" alt="" />
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit placeat consequatur sit cupiditate reiciendis praesentium et? Blanditiis, pariatur ullam?</p> */}
        </div>
      <div className="name-introduction">
        <h1>I'm Cigomba</h1>
        <p>Developer. Dreamer. Confridant Man.</p>
        <button>Contact Me</button>
      </div>
      </div>

      
    </div>

  )
}


export default Introduction