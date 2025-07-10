import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className="footer-content">
            <div className="titel-footer">
                <h1>Tea Bench Cafe</h1>
            </div>
            <div className="social-content">
                <h3>Get In Touch</h3>
                <h5>TeaBench@gmail.com</h5>
                <p>www.Teabench.com</p>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <h5> +91 8056025251</h5>
            </div>
          <div className="address">
            <h3>Address</h3>
            <h5>Tea Bench</h5>
            <p>no:22/24, chrompet ,chennai</p>
          </div>
        </div>
      </footer>
    </>
  )
}
