import React from 'react'
import './knowables.css'
import {faCss3Alt, faJs, faHtml5, faJava, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Knowables = () => {

  const languages = [
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faJava,
  ]

  const listKnowables = () => {
    return languages.map((x, i) => {
      return (<li key={i} className="column br">
          <FontAwesomeIcon icon={x} size='4x'/>
          <p>{x.iconName}</p>
      </li>
      )
    })
  }

  return (
    <>
    <br />
    <section className='container knowables'>
      <h5>Programming Languages / Tools</h5>
        <ul className='prog-tools'>
          {
            listKnowables()
            // languages.map((x, i) => {
            //   return (
            //     <FontAwesomeIcon icon={x} /> 
            //   )
            // })
          }
          <li></li>
        </ul>
    </section>
    <section className='certificates'>
      <h5>Certifications and Achievements</h5>
      <div className="row">

      </div>
    </section>
    </>
  )
}

export default Knowables