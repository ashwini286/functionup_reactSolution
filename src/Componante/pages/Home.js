import React from 'react'

function Home() {
  return (
    <>
      <section>
        <div className='Container'>
        <div className='left-side'>
        <h1>Welcome to pizza hut</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni?<br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni? <br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni?<br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni?</p>
        <button className='btn'>Know More</button>
         </div>  
          
        {/* right side */}
        <div className='right-side'>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/a5/df/42/photo3jpg.jpg" />
        </div>

        </div>
      </section>
    </>
  )
}

export default Home
