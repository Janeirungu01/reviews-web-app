import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Header'
import data from './data/reviewData'
import Body from './Body'
import ReviewForm from './components/ReviewForm'
import ReviewList from './components/ReviewList'
import ReviewStats from './components/ReviewStats'
import Footer from './Footer'



function App() {
 
  const [review, setReview] = useState(data)

   //function to delete a review 
  const deleteReview = (id) => {
      if (window.confirm('Are you sure you want to delete this review?')){
        setReview(review.filter((item) => item.id !==id))
      }
    }
    return (
    <>
      
      < Header text ="Review Application Version1" />   
        <ReviewForm />
        <div className="container">   
        < ReviewStats reviews={review} />      
         <ReviewList reviews={review} deleteReview={deleteReview} />
        </div>

      < Body />
      < Footer />

    </>
  )
}

export default App
