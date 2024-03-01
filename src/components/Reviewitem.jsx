import { useState } from "react"

function Reviewitem({review}) {

  // reviewitem to display the card while review list to list everything(the looping)
  return (

    <>
    <div className='card'>
        <div className='num-display'>{review.rating}</div>
        <div>{review.text}</div> 
             
    </div>
    </>
  )
}

export default Reviewitem
