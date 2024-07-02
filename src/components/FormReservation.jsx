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

const FormReservation = ({fetchData}) => {
    const [user] = useAuthState(auth);
    const [date, setDate] = useState(new Date());
    const ref = collection(db,"reservation");
    const [isLoading,setIsLoading]=useState(false)
    const [reservationData,setReservationData] = useState({
      name:"",
      phone:"",
      service:"",
      session:"",
      userId:user.uid,
      date:format(date,'d-M-y'),
    })
  
    const handleForm = (e)=>{
     const {name,value}=e.target
        setReservationData({
          ...reservationData,
          [name]:value,
        })
    }
  
    const handleSession = (value) => {
      setReservationData({ 
        ...reservationData,
        session:value,
        
      })
    };
    const handleDate = (selectedDate)=>{
      setDate(selectedDate);
    //   console.log(format(selectedDate,'d-M-y'))
      setReservationData({ 
        ...reservationData,
        date:format(selectedDate,'d-M-y'),
        
      })
    }
    const generateSessions = (startHour, endHour) => {
      const sessions = [];
      for (let hour = startHour; hour < endHour; hour++) {
        const start = hour < 10 ? `0${hour}:00` : `${hour}:00`;
        const end = (hour + 1) < 10 ? `0${hour + 1}:00` : `${hour + 1}:00`;
        sessions.push(`Session ${hour - startHour + 1} (${start}-${end})`);
      }
      return sessions;
    };
  
    const sessions = generateSessions(9, 21); // Generating sessions from 9 AM to 2 PM
    const addReservation = async()=>{
      setIsLoading(true)
        try {
          const {name,phone,service,session,date} = reservationData
          if (!name || !phone || !service || !session || !date) {
            toast.error("All fields are mandatory. Please complete them")
            setIsLoading(false)
          }else{
          const addData = await addDoc(ref,reservationData)
          toast.success("Reservation confirmed successfully!")
          setIsLoading(false)
        }
        } catch (error) {
          toast.error(`Failed to save your reservation. ${error.code}. Please try again later.`)
          setIsLoading(false)
        }
      }
    const handleSubmit = async()=>{
        await addReservation()
        fetchData()
      }
      const handleSelect = (value) => {
        setReservationData({ 
          ...reservationData,
          service:value,
        })
      };
  return (
    <Card className=" border border-2 w-full border-black">
    <CardHeader>
      <CardTitle> Reservation Form</CardTitle>
      {/* <CardDescription>Card Description</CardDescription> */}
    </CardHeader>
    <CardContent className="flex flex-col  gap-2 items-start">
      <Input
        type="name"
        name="name"
          value={reservationData.name}
        placeholder="Your Name"
          onChange={handleForm}
      />

      <Input
        type="name"
        name="phone"
          value={reservationData.phone}
        placeholder="Your Number"
        onChange={handleForm}
      />
      <Select name="service" onValueChange={(value)=>handleSelect(value)} >
        <SelectTrigger className=" " >
          <SelectValue className="" placeholder="Choose Service"     />
        </SelectTrigger>
        <SelectContent className="brutalism bg-background">
          <SelectItem value="Haircuts and Styling" >
            Haircuts and Styling
          </SelectItem>
          <SelectItem value="Manicure and Pedicure">
          Manicure and Pedicure
          </SelectItem>
          <SelectItem value="Facial Treatments">
            Facial Treatments
          </SelectItem>
        </SelectContent>
      </Select>
      <Select  onValueChange={(value)=>handleSession(value)} >
        <SelectTrigger className=" " >
          <SelectValue className="" placeholder="Choose Session"  />
        </SelectTrigger>
        <SelectContent className="brutalism bg-background">
        {sessions.map((session,i)=>(
           <SelectItem value={session} key={i} >
         {session}
         </SelectItem>
        ))}
        </SelectContent>
      </Select>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 brutalism">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
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

export default FormReservation