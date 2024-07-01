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
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { BookDashed, CalendarIcon, Loader } from "lucide-react";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

const Reservasi = () => {
  const [date, setDate] = useState();
  return (
    <section id="review" className="bg-primary md:h-screen">
      <div className="container w-full  pt-[2rem]   flex flex-col md:flex-row-reverse gap-5 justify-between items-start ">
        <div className="w-full">
          <h1 className="text-6xl  font-bold text-secondary mb-[1rem]">
            Book Your Service at Sea Salon
          </h1>

          {/* <h1 className="text-xl  font-normal text-black mb-[2rem]">
            Select your desired service and schedule your appointment now
          </h1> */}
          <h1 className="text-3xl  font-semibold text-white mb-[1rem]">
            Your Booked Appointments :
          </h1>
          <div className="flex gap-2 flex-col">
            <Card className="brutalism brutalism-hover  flex flex-col justify-between">
              <CardHeader className="text-destructive">
                <CardTitle>
                  {" "}
                  <BookDashed size={30} className="inline" /> You haven't booked
                  any appointments yet.
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="brutalism brutalism-hover  flex flex-col justify-between">
              <CardHeader>
                <CardTitle>x</CardTitle>
              </CardHeader>

              <CardFooter className="text-primary text-sm gap-2 align-bottom ">
                <p>x</p>

                <span> x</span>
                <p>x</p>
              </CardFooter>
            </Card>
          </div>
        </div>

        <Card className=" border border-2 w-full border-black">
          <CardHeader>
            <CardTitle> Reservation Form</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex flex-col  gap-2 items-start">
            <Input
              type="name"
              name="name"
              //   value={formData.name}
              placeholder="Your Name"
              //   onChange={}
            />

            <Input
              type="name"
              name="phone"
              //   value={formData.name}
              placeholder="Your Number"
              //   onChange={}
            />
            <Select>
              <SelectTrigger className=" ">
                <SelectValue className="" placeholder="Choose Service" />
              </SelectTrigger>
              <SelectContent className="brutalism bg-background">
                <SelectItem value="Haircuts and Styling">
                  Haircuts and Styling
                </SelectItem>
                <SelectItem value=" Haircuts and Styling">
                Haircuts and Styling
                </SelectItem>
                <SelectItem value="Facial Treatments">
                  Facial Treatments
                </SelectItem>
              </SelectContent>
            </Select>
         

            <Input
              type="name"
              name="time"
              //   value={formData.name}
              placeholder="time"
              //   onChange={}
            />
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
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </CardContent>
          <CardFooter>
            <Button
              className={buttonVariants({ size: "md", variant: "primary" })}
            >
              Confirm
            </Button>
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

            <Toaster
              position="top-right"
              gutter={-50}
              toastOptions={{
                className: "border border-black   mx-4 ",
                style: {
                  border: "2px solid black",
                  padding: "10px",
                  color: "black",
                  marginTop: "5rem",
                  boxShadow: "4px 4px 0 0 rgb(0, 0, 0)",
                },
              }}
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Reservasi;
