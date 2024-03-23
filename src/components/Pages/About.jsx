import { Link } from "react-router-dom";
import Button from "../Button";


function About() {
  return (
    <>
      <div className="container">
        <div className="card">
          <h3 className='head'>About us</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta unde error nostrum voluptatibus, consectetur quia at commodi assumenda quaerat, quam, iste consequuntur? Aspernatur, nihil optio veritatis id magni nemo et?.</p>
          <p>Version : 1.0</p>
          <br />
      
        </div>
        <p className='about-link'> 
              <Link to="/"><Button type='button' variant='secondary' >Go Home</Button></Link>
          </p>
      </div>
          
    </>
  )
}

export default About
