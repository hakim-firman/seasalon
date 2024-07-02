import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import axios from "axios";
const Testimoni = ({ isLoading,SetisLoading,fetchData,data,setData,filterData}) => {
//   const [data, setData] = useState();
//   const fetchData = async () => {
//     SetisLoading(true);
//   const url = new URL("https://668160a404acc3545a0685a8.mockapi.io/comment");

//   url.searchParams.append("limit", 2);
//   try {
//     const response = await axios.get(
//     url
//     );
//     setData(response.data);
//     SetisLoading(false);
//    
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// };
//   useEffect(() => {
//     fetchData();
//   }, []);
  const formatDate = (timestamp) => {
  
    const date = new Date(timestamp * 1000);

  
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    // Format tanggal
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

 
  return (
    <section id="" className="">
      <div className="container  py-10 px-10 flex flex-col gap-5 justify-center items-center ">
        <h1 className="text-6xl  font-bold text-primary mb-[0.5rem]">
          Hear from Our Delighted Clients
        </h1>
        <img
          src="review.png"
          className="w-[20rem] md:w-[65rem]  hidden md:block"
          alt=""
        />
        <div className="grid grod-cols-1 md:grid-cols-3 gap-4 align-bottom ">
          {isLoading
            ? "Loading"
            : data.map((i) => (
                <Card
                  className="brutalism brutalism-hover  flex flex-col justify-between"
                  key={i.id}
                >
                  <CardHeader>
                    <CardTitle>{i.comment}</CardTitle>
                  </CardHeader>

                  <CardFooter className="text-primary text-sm gap-2 align-bottom ">
                    <p>{i.name}</p>
                    <Star size={20} />
                    <span> {i.star}</span>
                    <p>{i.date}</p>
                  </CardFooter>
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
