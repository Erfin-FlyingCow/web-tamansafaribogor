
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import './Component/App.css';
import Home from './pages/Home';
import Facility from "./pages/Facility";
import About from './pages/About';
import Reservation from './pages/Reservation';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/Facility" element={<Facility/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Reservation" element={<Reservation/>}/>
      </Routes>
      <Footer />
    </Router>

  );
  
}

export default App;
