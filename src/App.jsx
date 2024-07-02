// import './App.css'

import { Facebook, Instagram, PhoneCall,  Twitter } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "@/components/Footer.jsx";
import Reservasi from "./pages/Reservasi.jsx";
import Reviews from "./pages/Reviews.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./config/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import Login from './pages/Login';
import Register from "@/pages/Register.jsx";
import NotFound from './pages/NotFound';



function App() {
  const [user] = useAuthState(auth);
  const[userRole,setUserRole]=useState()
  
  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
      const ref = doc(db, "Users", user.uid);
      const userDoc = await getDoc(ref);
       
        if (userDoc.exists) {
          const userData = userDoc.data();
          const role = userData.role;
          setUserRole(role);
       
        } else {
          
          setUserRole(null);
        }
      } else {
       
        setUserRole(null);
      }
    };
    
    fetchUserRole();
  }, [user]);
  return (
    <>
      <BrowserRouter>
      <Navbar userRole={userRole} />
     
      
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reservation" element={user ? <Reservasi/> : <Navigate to="/login" />}/> 
         
            <Route path="/reviews" element={<Reviews />} />
            
            {<Route path="/Login" element={!user?<Login />:<Navigate to={"/"}/>} />}
            {<Route path="/register" element={!user?<Register />:<Navigate to={"/"}/>} />}

            <Route path="/*" element={<NotFound/>}/> 
          </Routes>

      <Footer/>
      <Toaster 
   position="top-right"
   gutter={-50}
     toastOptions={{
      
    className: 'border border-black   mx-4 ',
    style: {
      border: '2px solid black',
      padding: '10px',
      color: 'black',
      marginTop:'5rem',
      boxShadow: '4px 4px 0 0 rgb(0, 0, 0)'
    },
  }} />  
      </BrowserRouter>
    </>
  );
}

export default App;
