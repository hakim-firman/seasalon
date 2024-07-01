// import SearchBar from './SearchBar'
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
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
import { Link } from "react-scroll";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const scroll = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scroll);
  });
  return (
    <div
      className={`${
        isActive ? " bg-white " : "bg-primary"
      } p-[1rem] z-50 border-b-2 border-primary sticky top-0 `}
    >
      <div className="container flex gap-[2rem]  justify-between items-center">
        {isActive ? (
          <img src="/public/logo.png" className="w-[7rem]" alt="" />
        ) : (
          <img src="/public/logo-white.png" className="w-[7rem]" alt="" />
        )}
        <div
          className={`${
            isActive ? " text-black " : "text-white"
          } gap-[2rem] items-center hidden sm:flex`}
        >
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-90}
            className={`${
              isActive ? "  hover:border-primary" : " hover:border-white"
            } hover:border-b  font-semibold cursor-pointer`}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="services"
            smooth={true}
            offset={-90}
            className={`${
              isActive ? "  hover:border-primary" : " hover:border-white"
            } hover:border-b  font-semibold cursor-pointer`}
          >
            Our Services
          </Link>
          <Link
            activeClass="active"
            to="review"
            smooth={true}
            offset={-90}
            className={`${
              isActive ? "  hover:border-primary" : " hover:border-white"
            } hover:border-b  font-semibold cursor-pointer`}
          >
            Review
          </Link>

          {isActive ? (
            <Button
              className={buttonVariants({ size: "lg", variant: "primary" })}
            >
              Login
            </Button>
          ) : (
            <Button
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              Login
            </Button>
          )}
        </div>
        <Sheet className="">
          <SheetTrigger className={`block sm:hidden brutalism  bg-white rounded-sm p-2`}>
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
                    to="home"
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
                    to="services"
                    smooth={true}
                    offset={-90}
                    className={`${
                      isActive
                        ? "  hover:border-primary"
                        : " hover:border-white"
                    }  text-lg font-semibold cursor-pointer`}
                  >
                    {/* <Button
                      className={buttonVariants({
                        size: "lg",
                        variant: "secondary",
                      })}
                    > */}
                      Our Services
                    {/* </Button> */}
                  </Link>
                  <Link
                    activeClass="active"
                    to="review"
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
                      Review
                    {/* </Button> */}
                  </Link>
                 
                    <Button
                      className={buttonVariants({
                        size: "lg",
                        variant: "primary",
                      })}
                    >
                      Login
                    </Button>
           
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
