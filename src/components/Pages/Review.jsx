import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import data from '../../data/reviewData'
import ReviewForm from '../ReviewForm'
import ReviewList from '../ReviewList'
import ReviewStats from '../ReviewStats'
import { Link } from 'react-router-dom';

function Review() {
  const [review, setReview] = useState(data)

  //function to delete a review 
 const deleteReview = (id) => {
     if (window.confirm('Are you sure you want to delete this review?')){
       setReview(review.filter((item) => item.id !==id))
     }
   }

   //function to add a review
   const AddReview = (newReview) => {
     newReview.id =uuid()
     //adds new review to the rest of the reviews 
     setReview([newReview, ...review])
   }

  return (
    <>
       <ReviewForm handleAdd={AddReview} />
            <div className="container">   
            < ReviewStats reviews={review} />      
            <ReviewList reviews={review} deleteReview={deleteReview} />
            </div>
            <p className='about-link'> 
              <Link to="/">Go Back Home</Link>
            </p>
    </>
  )
}

export default Review
