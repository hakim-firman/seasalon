// import SearchBar from './SearchBar'
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { auth, db, googleProvider } from "@/config/firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, PhoneCall } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FirebaseError } from "firebase/app";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithGoogle } from "@/Utils/SignInWithGoogle";

const Navbar = ({userRole}) => {
  const [isActive, setIsActive] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const scroll = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scroll);
  });

 

  const handleLogout = () => {
    auth.signOut();
    toast.success("You have successfully logged out");
    navigate("/");
  };
  return (
    <div
      className={`${
        isActive ? " bg-white " : "bg-primary"
      } p-[1rem] z-50 border-b-2 border-primary sticky top-0 `}
    >
      <div className="container flex gap-[2rem]  justify-between items-center">
        
        {isActive ? (
          <Link to="/">
            <img src="logo.png" className="w-[7rem]" alt="" />
          </Link>
        ) : (
          <Link to="/">
            <img src="logo-white.png" className="w-[7rem]" alt="" />
          </Link>
        )}
        <div
          className={`${
            isActive ? " text-black " : "text-white"
          } gap-[2rem] items-center hidden sm:flex`}
        >
          <Link
            to="/"
            className={`${
              isActive ? "  hover:border-primary" : " hover:border-white"
            } hover:border-b  font-semibold cursor-pointer`}
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="reviews"
            smooth={true}
            offset={-90}
            className={`${
              isActive ? "  hover:border-primary" : " hover:border-white"
            } hover:border-b  font-semibold cursor-pointer`}
          >
            Reviews
          </Link>
          {user&&(
             <Link
             activeClass="active"
             to="reservation"
             smooth={true}
             offset={-90}
             className={`${
               isActive ? "  hover:border-primary" : " hover:border-white"
             } hover:border-b  font-semibold cursor-pointer`}
           >
             Dasboard
           </Link>
          )}
         

          {user ? (
            <Button
              className={buttonVariants({ size: "lg", variant: "destructive" })}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link to={"/login"}>
            <Button
              className={buttonVariants({ size: "lg", variant: "secondary" })}
              
            >
              Login
            </Button>
            </Link>
          )}
        </div>
        <Sheet className="">
          <SheetTrigger
            className={`block sm:hidden brutalism  bg-white rounded-sm p-2`}
          >
            <Menu size={25} className=" " />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                {" "}
                <img src="/public/logo.png" className="w-[7rem]" alt="" />
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col justify-start align-top items-start gap-2 mt-[2rem]">
                  <Link
                    activeClass="active"
                    to="/"
                    smooth={true}
                    offset={-90}
                    className={`text-lg  font-semibold cursor-pointer`}
                  >
                    {/* <Button
                      className={buttonVariants({
                        size: "lg",
                        variant: "secondary",
                      })}
                    > */}
                    Home
                    {/* </Button> */}
                  </Link>
                  {/* <Link
                    activeClass="active"
                    to="about"
                    smooth={true}
                    offset={-90}
                    className={`${
                      isActive
                        ? "  hover:border-primary"
                        : " hover:border-white"
                    }   font-semibold cursor-pointer`}
                  >
                    <Button
                      className={buttonVariants({
                        size: "lg",
                        variant: "secondary",
                      })}
                    >
                      About
                    </Button>
                  </Link> */}

                  <Link
                    activeClass="active"
                    to="reviews"
                    smooth={true}
                    offset={-90}
                    className={`${
                      isActive
                        ? "  hover:border-primary"
                        : " hover:border-white"
                    } text-lg  font-semibold cursor-pointer`}
                  >
                    {/* <Button
                      className={buttonVariants({
                        size: "lg",
                        variant: "secondary",
                      })}
                    > */}
                    Reviews
                    {/* </Button> */}
                  </Link>
                  {user && (
                    <Link
                      activeClass="active"
                      to="reservation"
                      smooth={true}
                      offset={-90}
                      className={`${
                        isActive
                          ? "  hover:border-primary"
                          : " hover:border-white"
                      } text-lg  font-semibold cursor-pointer`}
                    >
                      Dashboard
                    </Link>
                  )}

                  {user ? (
                    <Button
                      className={buttonVariants({
                        size: "lg",
                        variant: "destructive",
                      })}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Link to={"/login"}>
                    <Button
                      className={buttonVariants({
                        size: "lg",
                        variant: "secondary",
                      })}
                      
                    >
                      Login
                    </Button>
                    </Link>
                  )}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
