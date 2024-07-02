import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { auth, db } from "@/config/firebase";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { addDoc, collection } from "firebase/firestore";
import { BookDashed, CalendarIcon, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";

const FormService = ({fetchData}) => {
    const [user] = useAuthState(auth);
    const ref = collection(db,"service");
    const [isLoading,setIsLoading]=useState(false)
    const [serviceData,setServiceData] = useState({
      
    })
  
    const handleForm = (e)=>{
     const {name,value}=e.target
        setServiceData({
          ...serviceData,
          [name]:value,
        })
        console.log(serviceData)
    }

  


    const addService = async()=>{
      setIsLoading(true)
        try {
          const {service,duration} = serviceData
          if (!service || !duration ) {
            toast.error("All fields are mandatory. Please complete them")
            setIsLoading(false)
          }else{
          const addData = await addDoc(ref,serviceData)
          toast.success("Service confirmed successfully!")
          setServiceData({
            service:"",
            duration:""
          })
          setIsLoading(false)
        }
        } catch (error) {
          toast.error(`Failed to save your service. ${error.code}. Please try again later.`)
          setIsLoading(false)
        }
      }
    const handleSubmit = async()=>{
      console.log(serviceData)
        await addService()
        fetchData()
      }
   
  return (
    <Card className=" border border-2 w-full border-black">
    <CardHeader>
      <CardTitle> Add Service </CardTitle>
      {/* <CardDescription>Card Description</CardDescription> */}
    </CardHeader>
    <CardContent className="flex flex-col  gap-2 items-start">
      <Input
        type="name"
        name="service"
          value={serviceData.service}
        placeholder="Name of Service"
          onChange={handleForm}
      />

      <Input
        type="name"
        name="duration"
          value={serviceData.duration}
        placeholder="Duration of the session (hour)"
        onChange={handleForm}
      />

    </CardContent>
    <CardFooter>
      {!isLoading?(
         <Button
         className={buttonVariants({ size: "md", variant: "primary" })}
         onClick={handleSubmit}
       >
         Confirm
       </Button>
      ):(
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
        Prosessing...
      </Button>

      )}
     
      
   
    </CardFooter>
  </Card>
  )
}

export default FormService