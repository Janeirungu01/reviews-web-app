import { FaTimes } from "react-icons/fa"

function Reviewitem({review, deleteReview}) {

  // reviewitem to display the card while review list to list everything(the looping)
  return (

    <>
    <div className='card'>
        <div className='num-display'>{review.rating}</div>
        <div>{review.text}</div>
        <button className="close" onClick={() =>deleteReview(review.id)}>
          < FaTimes />
        </button>
             
    </div>
    </>
  )
}

export default Reviewitem
