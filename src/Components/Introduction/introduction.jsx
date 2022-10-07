import React from 'react'
import './introduction.css'
import { Routes, Route } from 'react-router-dom'
import Contact from '../Contact/contact'
import App from '../../App'

const Introduction = () => {

  const showModal = () => {
    document.querySelector('.modal').style.display = 'initial';
  }

  return (
    <div className='introduction br h5'>

      <div className="row intro">
        <div>
      
      <h1>Hi there.</h1>
      <p>Welcome to my portfolio</p>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit placeat consequatur sit cupiditate reiciendis praesentium et? Blanditiis, pariatur ullam?</p> */}
        </div>
      <div className="name-introduction">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFWXSa18HEA8A/profile-displayphoto-shrink_800_800/0/1661300912204?e=2147483647&v=beta&t=y-Hfa1iRr-lShmYy4kskJzBmB0VP_lAIGNH8obKqyHo" alt="portrait of myself" />
        <h1>I'm Cigomba</h1>
        <p>Developer. Dreamer. Confridant Man.</p>
        <div className="about-me">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dolorum fugit possimus provident, vitae consectetur! Iste officia nulla, error nihil consequatur pariatur! Distinctio eligendi deleniti consectetur. Ducimus, totam quas laborum tenetur corporis accusantium temporibus harum omnis, repellendus magni accusamus saepe adipisci eaque obcaecati quia nam fugiat sunt alias perferendis blanditiis! Repudiandae, inventore nisi. At facilis et esse veritatis consequuntur velit molestiae. Laboriosam sequi maiores iure corrupti magnam pariatur error totam est unde, suscipit quaerat tenetur tempore porro a ipsam eum itaque nulla. Molestiae modi neque, qui incidunt, reprehenderit a facere maiores amet quae iure illo, ullam rem et vel beatae eum nisi quibusdam aut nulla voluptatibus repellat nemo iusto voluptate soluta! Cum modi aut a ratione nam explicabo odit debitis.</p>
        </div>
        <button onClick={() => {showModal()}} className='btn'>Contact Me</button>
      </div>
      </div>
    </div>

  )
}


export default Introduction