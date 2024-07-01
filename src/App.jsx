// import './App.css'

import { Facebook, Instagram, PhoneCall,  Twitter } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "@/components/Footer.jsx";
import Reservasi from "./pages/Reservasi.jsx";
import Reviews from "./pages/Reviews.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
     
      
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reservation" element={<Reservasi/>}/> 
         
            <Route path="/reviews" element={<Reviews />} />
            {/* <Route path="/*" element={<NotFound/>}/>  */}
          </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
