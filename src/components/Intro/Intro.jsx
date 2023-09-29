import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'

import hireMeLogo from '../../assets/hireme.png'
import myPhoto from '../../assets/myPhoto.png'

export default function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Harikesh</span> <br/> Web Developer</span>
            <p className="introPara">
            I'm a passionate full-stack web developer with a creative mindset <br /> and a penchant for turning ideas into reality. With a strong foundation <br /> in both front-end and back-end technologies, I bring websites and <br /> web applications to life, crafting seamless user experiences and robust <br /> functionality.
            </p>
            <Link><button className="btn"><img src={hireMeLogo} alt="Hire Me" /> Hire Me</button></Link>
        </div>

        <img src={myPhoto} alt="Me" className='myPhoto' />
    </section>
  )
}
