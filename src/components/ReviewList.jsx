import Reviewitem from "./Reviewitem"

function ReviewList({reviews}) {

    if(!reviews || reviews.length ===0){
        return (
        <p>No review Yet!!</p>
        )
    }
  return (
    <>
      <div>
        {reviews.map((review) => (
            <div key={review.id}>
               < Reviewitem  review={review} />
            </div>
        ))}
      </div>
    </>
  )
}

export default ReviewList
