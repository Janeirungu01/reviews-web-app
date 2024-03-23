import Button from "../Button"
import { Link } from "react-router-dom"
import { FaQuestionCircle } from "react-icons/fa"

function Home() {
  
  return (
    <>
    <div className="container"> 
      <div className="card">
        <h1>Welcome to our Company</h1>
        <p>Thankyou for using our product</p>
        <p>We would like you to review about your experience with us.</p> 
        <br /> <br />
        <Link to="/review"><Button type='button' variant='secondary' >Review</Button></Link>
          
      </div>
      <div className="about-link">
        <Link to="/about">
          <FaQuestionCircle size={40} />
        </Link>
      </div>
    </div>
      
    </>
  )
}

export default Home
