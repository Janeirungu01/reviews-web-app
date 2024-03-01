import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Header'
import data from './data/reviewData'
import Body from './Body'
import ReviewList from './components/ReviewList'
import Footer from './Footer'


function App() {
  const [review, setReview] = useState(data)
  return (
    <>
      
      < Header text ="Review Application Version1" />      

        <div className="container">
         < ReviewList reviews={review}/>
    

        </div>
      < Body />
      < Footer />

    </>
  )
}

export default App
