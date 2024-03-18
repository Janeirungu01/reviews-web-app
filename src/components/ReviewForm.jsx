import { useState } from "react"
import Button from "./Button"

const errorStyle = {
    display: 'block',
    marginTop: '7px',
    fontStyle:'italic'
}

function ReviewForm() {
    //state for input text
    const [text, setText] = useState('')
    //state for button disbale
    const [btnDisabled, setBtnDisabled] = useState(true)
    //state for validation (character)
    const [msg, setMsg] = useState()
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
  return (
    <>
        <div className="container">
            <div className="card">
            <form>
                <h3>Kindly drop a Review of the service that you have experienced</h3>
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

