import React, { useEffect, useState } from 'react'

function Timing() {
  debugger
    const[ count,setcount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setcount((count) => count+1);
         },1000)

})
  return (
    <div>
      <h1>I have rendered {count} times</h1>
    </div>
  );
};

export default Timing;
