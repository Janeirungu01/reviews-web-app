
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './components/Pages/About';
import Review from './components/Pages/Review';
import Home from './components/Pages/Home';
 
import Footer from './Footer'

function App() {


    return (
    <>
    <Header text ="Review Application V1" /> 

    <Router>
      <Routes>
        <Route path= '/' element={<Home />} /> 
        <Route path= '/about' element={<About />} /> 
        <Route path= '/review' element={<Review />} /> 
      </Routes>
    </Router>               

    </>
  )
}

export default App
