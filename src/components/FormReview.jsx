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
const FormReview = ({fetchData}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const[isLoading,SetisLoading]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    star: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event)=>{
    // event.preventDefault();
    if (formData.name === '' || formData.comment === '') {
      toast.error('Name and Comment cannot be empty');
      return;
    }
    SetisLoading(true)
    console.log(formData)
    axios.post('https://668160a404acc3545a0685a8.mockapi.io/comment', formData)
  .then(response => {
    console.log('Response:', response.data);
    console.log(response.data)
    toast.success('Review submitted successfully!');
    SetisLoading(false)
    setFormData({
        name: '',
        star: '',
        comment: ''})
        fetchData()
        setRating(null)
  })
  .catch(error => {
    console.error('Error:', error);
  });
    
    
  }
  
  return (
    <section id="review" className="bg-white">
      <div className="container   py-10 flex flex-col md:flex-row gap-5 justify-center items-center ">
        <div className="md:w-[50rem]">
          <h1 className="text-6xl  font-bold text-primary mb-[1rem]">
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
            <Input type="name" name="name" value={formData.name} placeholder="Your Name" onChange={handleInputChange} />
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
                        style={{ display: 'none' }}
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
         
            <Textarea placeholder="tell us yout experience . . ." value={formData.comment} name="comment" onChange={handleInputChange} />
          </CardContent>
          <CardFooter>
            {!isLoading? <Button className={buttonVariants({ size: "md"})} onClick={handleSubmit}>Submit</Button>: <Button className={buttonVariants({ size: "md",variant:"pressed" })} > <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            <Loader size={25} />
  </svg> Sumbiting...</Button>
 
           
}
<Toaster 
   position="top-right"
   gutter={-50}
     toastOptions={{
      
    className: 'border border-black   mx-4 ',
    style: {
      border: '2px solid black',
      padding: '10px',
      color: 'black',
      marginTop:'5rem',
      boxShadow: '4px 4px 0 0 rgb(0, 0, 0)'
    },
  }} />  
 

          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default FormReview;
