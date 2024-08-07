import React from 'react'
 import'./Header.css'

function Header() {
  return (
     <div>
        <div className="box">
          <h6> Free Hair styling Suplies shop Woow Commerce Themes</h6>
          <button type='sumit' className='btn-btn'>Add to card</button>
        </div>
        <div className="box2">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROTFOlLIO</li>
            <li>STORE</li>
            <li>BLOG</li>
            <li>CONTACTS</li>
            <li>REGISRATION</li>
            <li>LOG IN</li>
            <li>DELLIVER</li>
            <li>CHECK OUT</li>
            <li>MY ACCOUNT</li>
            
          </ul>
        </div>
        <div className="box3">
           <img src="https://livedemo00.template-help.com/woocommerce_49632/wp-content/themes/theme49632/images/logo.png" className='logo-img' /> 
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> */}
          {/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
          {/* <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" className='iocon'/></svg> */}
        </div>
        <div className="slider">
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wpfrank.com/demo/slider-factory-pro/wp-content/uploads/sites/8/2021/08/Portrait-beautiful-blond-woman-with-long-hair-makeup-brushes-near-attractive-face.jpg" className='silder-img'/>
      </div>
    <div class="carousel-item">
      <img src="https://wpfrank.com/demo/slider-factory-pro/wp-content/uploads/sites/8/2021/08/Make-up-artist-applying-mascara-eyelashes.jpg" className='silder-img'/>
    </div>
    <div class="carousel-item">
      <img src="https://wpfrank.com/demo/slider-factory-pro/wp-content/uploads/sites/8/2021/08/Woman-washing-head-at-hairsalon.jpg" className='slider-img'/>
    </div>
  </div> 
  <button class="carousel-control-prev"type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className="box4"></div>
    
        
   
         
    </div>
  )
}

export default Header;