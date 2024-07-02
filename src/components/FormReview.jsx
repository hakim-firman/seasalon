import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Textarea } from "./ui/textarea";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Loader, LoaderCircle, Star } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { format } from "date-fns";
const FormReview = ({ fetchData }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [date, setDate] = useState(new Date());
  const [isLoading, SetisLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    star: "",
    comment: "",
    date:format(date,'d-M-y')
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const addData=async()=>{
    const ref = collection(db,"review");
    const addData = await addDoc(ref,formData)
      toast.success("Review confirmed successfully!")
      SetisLoading(false)
      fetchData()
      setFormData({
              name: "",
              star: "",
              comment: "",
            });
  }
  const handleSubmit = async(event) => {
    // event.preventDefault();
    if (formData.name === "" || formData.comment === "") {
      toast.error("Name and Comment cannot be empty");
      return;
    }
    SetisLoading(true);


    addData()
    // axios
    //   .post("https://668160a404acc3545a0685a8.mockapi.io/comment", formData)
    //   .then((response) => {
    //     toast.success("Review submitted successfully!");
    //     SetisLoading(false);
    //     setFormData({
    //       name: "",
    //       star: "",
    //       comment: "",
    //     });
       
    //     fetchData();
    //     setRating(null);
    //   })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section id="review" className="bg-primary">
      <div className="container   py-10 flex flex-col md:flex-row gap-5 justify-center items-center ">
        <div className="md:w-[50rem]">
          <h1 className="text-6xl  font-bold text-white mb-[1rem]">
            Share Your Experience!
          </h1>

          <h1 className="text-xl  font-normal text-black mb-[2rem]">
            Have you visited Seasalon recently? We&lsquo;d love to hear about
            your experience! Leave us a review and let others know how
            wev&lsquo;e helped you achieve your beauty goals.
          </h1>
        </div>
        <Card className="w-full border border-2 border-black">
          <CardHeader>
            <CardTitle>Rate Your Experience</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Input
              type="name"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleInputChange}
            />
            {/* <Input type="Nama" placeholder="1-5" /> */}
            <div className="flex gap-2">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="star"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      style={{ display: "none" }}
                      onChange={handleInputChange}
                    />
                    <Star
                      className="star"
                      color={
                        ratingValue <= (hover || rating) ? "#0c7fe4" : "#e4e5e9"
                      }
                      size={30}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
              {/* <p>You rated {rating} stars.</p> */}
            </div>

            <Textarea
              placeholder="tell us yout experience . . ."
              value={formData.comment}
              name="comment"
              onChange={handleInputChange}
            />
          </CardContent>
          <CardFooter>
            {!isLoading ? (
              <Button
                className={buttonVariants({ size: "md" })}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
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
                Sumbitting...
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default FormReview;
