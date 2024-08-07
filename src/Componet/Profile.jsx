import React from 'react'

function Profile(){
     console.log(props)
  return (
    <div>
        <center>
            <h2> Username:{props.user_name}</h2>
        </center>

    </div>
  )
}

export default Profile