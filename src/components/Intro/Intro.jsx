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
            <span className="introText">I'm <span className="introName">Harikesh</span> <br/> Full-Stack Web Developer</span>
            <p className="introPara">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sequi repellendus deleniti eligendi quae! Numquam ipsum fugiat aspernatur assumenda, soluta excepturi nemo? A, iusto laborum? Deserunt fugit ut a quibusdam?
            </p>
            <Link><button className='btn'><img src={hireMeLogo} alt="Hire Me" /> Hire Me</button></Link>
        </div>

        <img src={myPhoto} alt="Me" className='myPhoto' />
    </section>
  )
}
