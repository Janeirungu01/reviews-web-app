import { useState } from "react"
import Button from "./Button"

function ReviewForm() {
    const [text, setText] = useState('')
    const textHandler =(e) => {
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
                  
                    <Button type='submit' variant='primary'>Submit</Button>
                </div>
            </form>
            </div>
      </div>
    </>
  )
}

export default ReviewForm

