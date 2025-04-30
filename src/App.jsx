import './App.css'
import Footer from './components/common/Footer.jsx';
import Navbar from './components/common/Navbar'
import About from './pages/About.jsx';
import AppointmentBooking from './pages/AppointmentBooking.jsx';
import Contact from './pages/Contact.jsx';
import Home  from "./pages/Home.jsx";
import Team from './pages/Team.jsx';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
function App() {
  

  return (
    <Router>
    <>
    <main className='overflow-hidden'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/appointmentbooking" element={<AppointmentBooking/>}/>
      </Routes>
      <Footer/>
    </main>
      
    </>
    </Router>
  )
}

export default App
