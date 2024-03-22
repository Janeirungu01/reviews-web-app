import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import data from './data/reviewData'
import ReviewForm from './components/ReviewForm'
import ReviewList from './components/ReviewList'
import ReviewStats from './components/ReviewStats'
import About from './components/Pages/About'
import Review from './components/Pages/Review'
import Home from './components/Pages/Home'

 
import Footer from './Footer'


function App() {
 
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
    < Header text ="Review Application Version 1" /> 

    <Router>
      <Routes>
        <Route path= '/' element={
          <>
          <ReviewForm handleAdd={AddReview} />
            <div className="container">   
            < ReviewStats reviews={review} />      
            <ReviewList reviews={review} deleteReview={deleteReview} />
            </div>
          </>
        }></Route>

        <Route path= '/' element={<Home />} /> 
        <Route path= '/about' element={<About />} /> 
        <Route path= '/review' element={<Review />} /> 
        <Route path= '/home' element={<Home />} /> 
      </Routes>
    </Router>   
             
     
      < Footer />

    </>
  )
}

export default App
