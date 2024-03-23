import Button from "../Button"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate() 

  return (
    <>
    <div className="container"> 
      <div className="card">
        <h1>Welcome to our Company</h1>
        <p>Thankyou for using our product</p>
        <p>We would like you to review about your experience with us.</p> 
        <br /> <br />
        <Button type='button' variant='secondary' onclick={() => navigate('/review')}>Review</Button>    
      </div>
    </div>
      
    </>
  )
}

export default Home
