import FormBranch from "@/components/FormBranch";
import FormReservation from "@/components/FormReservation";
import FormService from "@/components/FormServices";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
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
import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { BookDashed, CalendarIcon, Clock, Loader, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";

const AdminDashboard = () => {
  const [user]=useAuthState(auth)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "service")); 
      const dataList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataList);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]); 
  return (
    <section id="review" className="bg-primary ">
      <div className="container w-full  pt-[2rem]   flex flex-col md:flex-row-reverse gap-5 justify-between items-start ">
        <div className="w-full">
          <h1 className="text-6xl  font-bold text-secondary mb-[1rem]">
            Manange Your Service
          </h1>

          {/* <h1 className="text-xl  font-normal text-black mb-[2rem]">
            Select your desired service and schedule your appointment now
          </h1> */}
          <h1 className="text-3xl  font-semibold text-white mb-[1rem]">
            List of Service :
          </h1>
          <div className="flex gap-2 flex-col">
           

            {data.length !== 0 ? (
             !isLoading?data.map((i) => (
              <Card
                className="brutalism brutalism-hover  flex flex-col justify-between"
                key={i.id}
              >
                <CardHeader>
                  <CardTitle>{i.service} </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg flex flex-row gap-2 items-center">
                    <Clock/>
                    <p>{i.duration} Hour / Session</p>
                  </CardDescription>
                </CardContent>
               
              </Card>
            )):""
              ) : (
                <Card className="brutalism brutalism-hover  flex flex-col justify-between">
                <CardHeader className="text-destructive">
                  <CardTitle>
                    {" "}
                    <BookDashed size={30} className="inline" /> You haven't booked
                    any appointments yet.
                  </CardTitle>
                </CardHeader>
              </Card>
            )}

            {/* {!isLoading?data.map((i) => (
              <Card
                className="brutalism brutalism-hover  flex flex-col justify-between"
                key={i.id}
              >
                <CardHeader>
                  <CardTitle>ss</CardTitle>
                </CardHeader>

                <CardFooter className="text-primary text-sm gap-2 align-bottom ">
                  <p>x</p>

                  <span> x</span>
                  <p>x</p>
                </CardFooter>
              </Card>
            )):"loading"} */}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
        <FormService fetchData={fetchData} />
        <FormBranch fetchData={fetchData} />
        </div>
       
      </div>
    </section>
  );
};

export default AdminDashboard;
