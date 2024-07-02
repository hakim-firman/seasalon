import { RegisterUser } from '@/Utils/RegisterUser'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Register = () => {
  const navigate=useNavigate()
  const [isLoading,setIsloading]=useState(false)
  const [email,setEmail]=useState()
  const [fullName,setFullName]=useState()
  const [password,setPassword]=useState()
  const [phone,setPhone]=useState()
  const handleRegister = async()=>{
    setIsloading(true)
    await RegisterUser(email,password,fullName,phone)
    setIsloading(false)
  }

  return (
    <section id="review" className="bg-primary md:h-screen">
      <div className="container w-full  pt-[2rem] pt-[6rem]    flex flex-col md:flex-row-reverse gap-5 justify-between items-center ">
        <div className="w-full ">
          <h1 className="text-6xl  font-bold text-secondary mb-[1rem]">
          Get Started with Sea Salon
          </h1>

          <h1 className="text-xl  font-normal text-black mb-[2rem]">
          Register now to enjoy effortless booking, manage your appointments, and personalize your salon experiences.
          </h1>
        
        </div>

        <Card className=" border border-2 w-full border-black">
          <CardHeader>
            <CardTitle> Register  Your  Account</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex flex-col  gap-2 items-start">
            <Input
              type="text"
              name="fullName"
                value={fullName}
              placeholder="Enter Your Full Name"
                onChange={(e)=>setFullName(e.target.value)}
            />
            <Input
              type="email"
              name="email"
                value={email}
              placeholder="Enter Your Email"
                onChange={(e)=>setEmail(e.target.value)}
            />
            <Input
              type="text"
              name="number"
                value={phone}
              placeholder="Your Phone Number"
                onChange={(e)=>setPhone(e.target.value)}
            />

            <Input
              type="password"
              name="Password"
                value={password}
              placeholder="create your password"
                onChange={(e)=>setPassword(e.target.value)}
            />
      
            <div className='w-full'>
              <Link to="/login" className='border-b border-slate-700 hover:border-primary'>Already have an account? Log in here!</Link>

            </div>
           

          </CardContent>
          <CardFooter>
            <div className="flex flex-col w-full gap-2">
              {isLoading?( <Button
              className={buttonVariants({ size: "md", variant: "pressed" })}
            >
              {" "}
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              >
                <Loader size={25} />
              </svg>{" "}
              Registering...
            </Button>):(
                <Button
                className={buttonVariants({ size: "md", variant: "primary" })}
                onClick={handleRegister}
              >
                Register Now
              </Button>
              )}
            
          
           
           
     
            </div>
          

         
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default Register