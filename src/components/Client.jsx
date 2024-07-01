import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button';
import {  MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Client = () => {
  return (
    <section className="bg-white">
    <div className="container  py-10 px-10 flex flex-row-reverse gap-5 justify-center items-center ">
      <div className="">
        <h1 className="text-6xl  font-bold text-primary mb-[1rem]">
        Client Reviews and Testimonials
        </h1>
        <h1 className="text-2xl  font-semibold text-black mb-[0.5rem]">
        Discover What Our Clients Have to Say About Their Sea Salon Experience
        </h1>
        <Link to="/reviews">
        <Button className={buttonVariants({ size: "lg",variant:"Primary" })}>
            <div className="text-lg flex flex-row gap-2 justify-center items-center cursor-pointer"><MessageCircle size={24} /> Explore More Reviews</div>
        </Button>
        </Link>
         
      </div>
      <img
        src="/public/testimoni.png"
        className="w-[20rem] md:w-[25rem]  hidden md:block"
        alt=""
      />
    </div>
  </section>
  )
}

export default Client