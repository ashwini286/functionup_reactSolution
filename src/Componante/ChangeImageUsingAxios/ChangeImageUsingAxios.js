import axios from 'axios'
import React, { useEffect, useState } from 'react'

  function Asyawait() {
  const [image, setImage] = useState('')
 
  const getDogData = async() => {
    try{
      const response = await axios.get('https://dog.ceo/api/breeds/image/random')
      setImage(response.data.message)
    }  catch (error){ console.log(error)}
       

    }
    
 

  return (
    <div >
      <img
        src={image}
        alt='load image'
        style={{ height: "400px" }}
      />
      <button onClick={getDogData}  style={{
              padding: "20px",
              margin: "20px",
              backgroundColor: "blueviolet",
              borderRadius:"6px",
              border:"none",
              color:"white",
              textTransform: "uppercase" }}
            >Click me</button>
    </div>
  );

}
export default Asyawait
