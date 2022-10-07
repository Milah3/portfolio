import React, { useEffect } from 'react'
import Navbar from '../Navbar/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-regular-svg-icons'
import { X } from 'react-feather'

import './contact.css'

const Contact = ({}) => {
  
  const removeModal = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    console.log('modal removed')
  }

  const submitForm = () => {
    // TO DO
    console.log('form submitted');
    removeModal();
  }
  useEffect(() => {
    document.querySelector('.modal').style.display = 'none';
  }, [])

  return (
      <>
      <div className="modal u-max-full-width br">
      <a id="remove-btn" onClick={() => {removeModal()}}> <X /></a>
      <div className='modal-content half-column'>
      <h4>
      <a>Cigomba.tech</a>
      </h4>
      <h2>
        <b>
        Get in touch with me
        </b>
        </h2>
      <p>I love using software and hardware to develop new ideas.
      Please contact me for job or work opportunities as well as collaborations. Thank you.</p>
      <form className='u-full-width' action='post'>
            <label htmlFor="emailInput">Your email</label>
            <input type="email" id='emailInput' className='u-full-width' placeholder='example@mailbox.com' />
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" placeholder='Your message here...' ></textarea>
            <button type='button' className='btn' onClick={() => submitForm()}>Submit</button>
      </form>
      </div>
      </div>
      </>
      )
}

export default Contact