import { useState } from "react"
import Button from "./Button"
import Rating from "./Rating"

const errorStyle = {
    display: 'block',
    marginTop: '7px',
    fontStyle:'italic'
}

function ReviewForm({handleAdd}) {
    //state for input text
    const [text, setText] = useState('')
    //state for button disbale
    const [btnDisabled, setBtnDisabled] = useState(true)
    //state for validation (character)
    const [msg, setMsg] = useState('')
    //state to handle ratings from users
    const [rating, setRating] = useState(8)
    
    //function to update the text state(in the input field) and also validate the text characters to be above 20 before button will be enabled
    const textHandler =(e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMsg(null)
        } else if(text !== '' && text.trim().length <=20){
            setMsg('Your review must be more than 20 characters')
            setBtnDisabled(true)
        } else {
            setMsg(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }
//function to submit a review
const formSubmit = (e) => {
    e.preventDefault()
    if(text.trim(). length >20){
        const newReview = {
            text,
            rating
        }
        handleAdd(newReview)
        setText('')
    }
} 

  return (
    <>
        <div className="container">
            <div className="card">
            <form onSubmit={formSubmit}>
                <h3>Kindly drop a Review of the service that you have experienced</h3>
                < Rating rating={(rating) => setRating(rating)} /> 
                <br />
                <br />
                <div className="input-group">
                    <input type="text" value={text} placeholder="Write your review here" onChange={textHandler} />
                  
                    <Button type='submit' variant='secondary' isDisabled={btnDisabled}>Submit</Button>
                </div>
                {msg && <span className="message" style={errorStyle}>{msg}</span>}
            </form>
            </div>
      </div>
    </>
  )
}

export default ReviewForm

