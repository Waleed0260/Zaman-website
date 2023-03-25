import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div><p>Designed and developed by &copy; </p> <a href="https://www.linkedin.com/in/waleed0260/" style={{textDecoration: "none", color: "rgb(160, 158, 158)"}}><b>Muhammad Waleed Ahsan</b></a> </div>
      <div>
        <span>Terms and condition</span>
        <span>Privacy Policy</span>
        <span>Login</span>
      </div>
    </div>
  )
}

export default Footer
