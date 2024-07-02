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
import { addDoc, collection, getDocs } from "firebase/firestore";
import { BookDashed, CalendarIcon, Clock, Loader, LocateIcon, MapPin, Store } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";

const FormBranch = ({ fetchData }) => {
  const [user] = useAuthState(auth);
  const ref = collection(db, "branch");
  const [branch,setBranch]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [branchData, setsetBranchData] = useState({});

  const handleForm = (e) => {
    const { name, value } = e.target;
    setsetBranchData({
      ...branchData,
      [name]: value,
    });
    
  };



  const addBranch = async () => {
    setIsLoading(true);
    try {
      const { name, location,open,close } = branchData;
      if (!name || !location || !open || !close) {
        toast.error("All fields are mandatory. Please complete them");
        setIsLoading(false);
      } else {
        const addData = await addDoc(ref, branchData);
        toast.success("Branch confirmed successfully!");
        getBranch()
        setsetBranchData({
          name: "",
          location: "",
          open: "",
          close: "",
        });
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(
        `Failed to save your branch. ${error.code}. Please try again later.`
      );
      setIsLoading(false);
    }
  };
  const handleSubmit = async () => {
    console.log(branchData)
    await addBranch();
    fetchData();
  };


  const getBranch = async () => {
    setIsLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "branch")); 
      const dataList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBranch(dataList);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getBranch();
    }
  }, [user]); 

  return (
    <Card className=" border border-2 w-full border-black">
      <CardHeader>
        <CardTitle> Manange Branch</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="flex flex-col  gap-2 items-start">
        <Input
          type="name"
          name="name"
          value={branchData.name}
          placeholder="Name of Branch"
          onChange={handleForm}
        />

        <Input
          type="name"
          name="location"
          value={branchData.location}
          placeholder="Location "
          onChange={handleForm}
        />
        <Input
          type="name"
          name="open"
          value={branchData.open}
          placeholder="Branch open hour (13 for 13.00) "
          onChange={handleForm}
        />
        <Input
          type="name"
          name="close"
          value={branchData.close}
          placeholder="Branch close hour (13 for 13.00) "
          onChange={handleForm}
        />
        {!isLoading ? (
          <Button
            className={buttonVariants({ size: "md", variant: "primary" })}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        ) : (
          <Button
            className={buttonVariants({ size: "md", variant: "pressed" })}
          >
            {" "}
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              <Loader size={25} />
            </svg>{" "}
            Prosessing...
          </Button>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-2 w-full">
        <CardTitle>List of Branch :</CardTitle>
        {!isLoading&&branch.map((i)=>(
            <Card className="brutalism brutalism-hover  flex flex-col justify-between" key={i.id}>
            <CardHeader className="text-black">
              <CardTitle>
                {" "}
                <Store size={30} className="inline" /> {i.name}
              </CardTitle>
            </CardHeader>
            <CardFooter className="text-primary text-lg gap-2 align-bottom ">
                  <div className="flex flex-row gap-1 items-center justify-center">
                  <MapPin />
                    <p>{i.location}</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                  <Clock />
                    <p>{i.open}.00 - {i.close}.00 </p>
                  </div>
               
                 
                </CardFooter>
          </Card>
        ))}
        
        </div>
        
      </CardFooter>
    </Card>
  );
};

export default FormBranch;
