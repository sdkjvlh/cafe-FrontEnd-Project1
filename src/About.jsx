import React from 'react'
import { Nav } from './Nav'
import './About.css'
import { Footer } from './Footer'

export const About = () => {
  return (
    <>
    <div className="container">
       <div className="navbar-content">
              <div className="heading">
               <strong>Tea B</strong>
               <img src="bench.png"  />
               <strong>nch</strong>
              </div>
              <div className="nav">
        <Nav />
              </div>
            </div>
      <div className="about-content">
        <div className="content">
        <p>At <strong>Tea Bench</strong>, we believe that a great café is more than just coffee—it's a feeling, a space, and a community. Founded in <b>2025</b> with a dream to bring people together over quality brews and comforting bites, our café is a warm, inviting corner where every cup tells a story.</p>
        <p>From handpicked beans brewed to perfection, to our freshly baked treats and hearty meals, everything on our menu is crafted with care and passion. We work closely with local farmers and suppliers to bring you the freshest ingredients, and our seasonal specials ensure there’s always something new to savor.</p>
        <p>Whether you're a morning espresso lover, a tea enthusiast, or someone simply looking to unwind with a book or a friend, <strong>Tea Bench</strong> welcomes you. With free Wi-Fi, cozy interiors, and a playlist to set the mood, we’ve created the perfect ambiance for work, relaxation, or a quick caffeine fix.</p>
        <p>Come visit us and make yourself at home. <strike>We’re not just a café</strike> <strong>we're your neighborhood's happy place.</strong></p>
      </div>
        </div>
    </div>
     <div className="footer">
          <Footer/>
        </div>
    </>
  )
}
