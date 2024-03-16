import Reviewitem from "./Reviewitem"

function ReviewList({reviews, deleteReview}) {

    if(!reviews || reviews.length ===0){
        return <p>No review Yet!!</p>
        
    }
  return (
    <>
      <div>
        {reviews.map((item) => (
            <div key={item.id}>
               < Reviewitem  review={item} deleteReview={deleteReview} />
            </div>
        ))}
      </div>
    </>
  )
}

export default ReviewList
