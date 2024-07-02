import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Album } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import {  signInWithGoogle } from "@/Utils/SignInWithGoogle";
// import { Link } from 'react-router-dom'

const Hero = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/reservation");
    } catch (error) {
      console.error("Error signing in:", error);
      // Handle error if needed
    }
  };
  
  return (
    <section id="home" className="bg-primary">
      <div className="container  py-10 flex -mt-[2rem] 2xl:mt-0  gap-5 justify-center items-center min-h-screen 2xl:min-h-fit  ">
        <div className="">
          <h1 className="text-6xl md:text-5xl lg:text-6xl  font-bold text-white mb-[0.5rem]">
            Beauty and Elegance Redefined
          </h1>
          <h1 className="text-xl  font-medium text-white mb-[2rem]">
            Ready to transform your look? Reserve your appointment today and
            experience the elegance of Seasalon.
          </h1>
          {user?(
            <Link to="reservation">
            <Button
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              <div className="text-lg flex flex-row gap-2 justify-center items-center cursor-pointer">
                <Album size={24} /> Book Now
              </div>
            </Button>
          </Link>
          ):
          <Link to={"/login"}>
          
          <Button
            className={buttonVariants({ size: "lg", variant: "secondary" })}
           
          >
            <div className="text-lg flex flex-row gap-2 justify-center items-center cursor-pointer">
              <Album size={24} /> Book Now
            </div>
          </Button>
          </Link>
      }
          
        </div>
        <img
          src="ilustrasi.png"
          className="w-[30rem] lg:w-[35rem] hidden md:block "
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
