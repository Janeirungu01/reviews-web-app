import { FaFacebook } from "react-icons/fa"

function ReviewStats({reviews}) {
    //average of the total number of reviews
    let average= (reviews.reduce((acc, cur) => {
        return acc + cur.rating}, 0)/reviews.length).toFixed(1)

  return (
    <>
      <div className="review-stats">
        <p>{reviews.length} Reviews</p>
        <p>{isNaN(average)? 0 : average}</p>
      </div>
    </>
  )
}

export default ReviewStats
