// import './App.css'

import { Facebook, Instagram, PhoneCall, Star, Twitter } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import { Button, buttonVariants } from "./components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./components/ui/input.jsx";
import { Textarea } from "./components/ui/textarea.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Testimoni from "./components/Testimoni.jsx";
import FormReview from "./components/FormReview.jsx";
import Services from "./components/Services.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLoading, SetisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filterData,setFilterData]=useState()

  const fetchData = async () => {
    try {
      const response = await axios.get('https://668160a404acc3545a0685a8.mockapi.io/comment');
      setData(response.data);
      console.log(data)
      SetisLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // useEffect(() => {
  //   setFilterData(data.slice(0, 6));
  // }, [data]);



  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
     <Hero/>
      <About/>
      <Services/>
     <FormReview fetchData={fetchData}  />
     <Testimoni isLoading={isLoading} SetisLoading={SetisLoading} fetchData={fetchData} data={data} filterData={filterData} setData={setData}/>
    
      <footer className="bg-primary">
        <div className="container py-[2rem] flex flex-col sm:flex-row  justify-between items-start sm:items-center">
          <img src="/public/logo-white.png" className="h-[5rem]" alt="" />
          <div className="text-white font-semibold font-lg ">
            <h1 className="text-2xl font-bold">Contact</h1>
            <div className="flex gap-2 items-center justify-center">
              <PhoneCall  size={18} /> <h1>08123456789 (thomas)</h1>
            </div>
            <div className="flex gap-2">
              <PhoneCall size={18} /> <h1> 08164829372 (sekar)</h1>
            </div>
            <div className="flex  gap-2 mt-[2rem]">
            <Instagram size={28} />
            <Twitter size={28} />
            <Facebook size={28} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
