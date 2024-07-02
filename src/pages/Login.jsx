import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookDashed, Loader } from "lucide-react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "@/Utils/SignInWithGoogle";
import { SignInWIthEmail } from "@/Utils/SignInWithEmail";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleLoginWithGoogle = async () => {
    await signInWithGoogle();
    navigate("/");
  };
  const handleLoginWithEmail = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You have successfully logged in.");
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(`Login Failed with message:${error.code}`);
    }
  };
  return (
    <section id="review" className="bg-primary md:h-screen">
      <div className="container w-full  pt-[2rem] pt-[6rem]    flex flex-col md:flex-row-reverse gap-5 justify-between items-center ">
        <div className="w-full ">
          <h1 className="text-6xl  font-bold text-secondary mb-[1rem]">
            Start Your Salon Experience
          </h1>

          <h1 className="text-xl  font-normal text-black mb-[2rem]">
            Create an Account or Log In to Easily Manage Your Salon Visits and
            Bookings
          </h1>
        </div>

        <Card className=" border border-2 w-full border-black">
          <CardHeader>
            <CardTitle> Access Your Account</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex flex-col  gap-2 items-start">
            <Input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              name="Password"
                value={password}
              placeholder="password here"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-full">
              <Link
                to="/register"
                className="border-b border-slate-700 hover:border-primary"
              >
                First time? Register today to make your appointments!
              </Link>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col w-full gap-2">
              {isLoading ? (
                <Button
                  className={buttonVariants({ size: "md", variant: "pressed" })}
                >
                  {" "}
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                  >
                    <Loader size={25} />
                  </svg>{" "}
                  Logging...
                </Button>
              ) : (
                <Button
                  className={buttonVariants({ size: "md", variant: "primary" })}
                  onClick={handleLoginWithEmail}
                >
                  Login
                </Button>
              )}

              <Button
                className={buttonVariants({ size: "md", variant: "secondary" })}
                onClick={handleLoginWithGoogle}
              >
                {" "}
                <FcGoogle className="text-xl mr-1" />
                Login With Google
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Login;
