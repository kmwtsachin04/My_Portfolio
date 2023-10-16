import HeaderImage from '../../assets/hh.png';
import data from './data';
import './header.css'
import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Header = () => {
  const [text] =  useTypewriter ({
      words:['Fullstack Developer',
              'Web Developer',
               'Coder',
              'Backend Developer',
            'Java with DSA'  ],
            loop:{},
            typeSpeed:180,
            delaySpeed:50
  })
  return (
   <header id="header">
   <div className="container header__container">
    <div className="header__profile">
      <img src={HeaderImage} alt="Profile_Image" />
    </div>
    <h3>Sachin Kumawat</h3>
    <br />
    <h6>I am a <span className='role'>{text} </span><span className='role' ><Cursor cursorStyle="|"/></span></h6>
   
    <p>I am a highly skilled and versatile software engineer who has expertise in both front-end and back-end development (Fullstack Developer). I am able to design, develop and maintain complete web applications.</p>
    <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
    <div className="header__socials">
      {
       data.map(item => <a href={item.link} target='_blank' rel="noreferrer">{item.icon}</a>)
      }
    </div>
   </div>
   </header>
  )
}

export default Header