import React, { Component } from 'react'
import './navbar.css'
 class Navbar extends Component {
  render() {
    return (
      <div>
       <div className='header'>
       <div className='nav-container'>
            <div className='icons-container'><i  className='fa-brands fa-square-instagram'></i><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-pinterest"></i></div>
         <div className='adress'><div className='adress-time-email'><h2><p className='adress-p'>203 Madison Ave, NY, USA</p><i class="fa-solid fa-location-dot"></i> Adress</h2></div>
         <div className='adress-time-email'><h2><p className='adress-p'>Monday - Friday 9am - 6pm</p><i class="fa-solid fa-calendar-days"></i>Timing</h2></div>
         <div className='adress-time-email'><h2><p className='adress-p'>envato@gmail.com</p><i class="fa-solid fa-envelopes-bulk"></i>Mail to us</h2></div><i  style={{marginTop:'34px',fontSize:'30px', marginLeft:'100px'}} class="fa-solid fa-bars"></i></div> </div>
         <div className='navbar-container'><div className='background'><img src='https://imgs.search.brave.com/nU9Yresn4r5R39eluaoBzoIXYr-_gMBsL0Ai8DukISU/rs:fit:404:374:1/g:ce/aHR0cHM6Ly9vcmln/MDAuZGV2aWFudGFy/dC5uZXQvYWNiOS9m/LzIwMTUvMTI0L2Ev/My9ibG9nX2xvZ29f/YnlfZmFraHJpMDEx/LWQ4czdsdnQucG5n'></img>
</div>
         <div className='a-navbar-container'><a className='home' href='#'>Home</a><p className='display-home'><li>sfsdf</li><li>sfsf</li><li>sfsdf</li></p><a href='#'>Pages</a><a href='#'>Shop</a><a href='#'>Blog</a><a href='#'>Contact us</a></div>
         <div className='searchbar'><input type='search'></input><button>Book Ticket</button></div>
         </div>
        <div className='image-slider'><div className='a-tags'><a href='#'>5 DAYS</a><a href='#'>15 TALK</a><a href='#'>2 PARTIES</a></div>
        <div className='big-words'><h1>WORLD DIGITAL CONFERENCE</h1>
<div className='buttons'><button className='blue-btn'>Book Ticket</button> <button className='yellow-btn'>Video Demo</button>
</div>
        </div>
        </div>
        </div>
       
      </div>
    )
  }
}
export default Navbar