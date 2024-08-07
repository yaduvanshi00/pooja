import React from 'react'
import './Profile.css';
function Profile() {

  ``
  return (
    <div>
      <center>
      <div className="box">
      <form>
        <h1>Login </h1>
       <label className='full_name'>Full name</label>
        <input type="text" name='full_name' className='btn'id='full_name'/>
        <br></br>
        <label htmlFor='eamil'>email</label>
        <input type="text" name='email' className='btn' id='eamil'/><br></br>
        <label htmlFor='phone'>phone</label>
        <input type="text" name='phone' className='btn'/><br></br>
        <label htmlFor='passward'>passward</label>
        <input type="text" name='passward'className='btn' id='passward'/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><"Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc".><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>
      </form>    
      <button type='sumit' className='btn-btn' > Registration</button>
      </div> 
      </center>  
     
    </div>
  )
}

export default Profile