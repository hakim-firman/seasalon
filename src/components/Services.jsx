import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Hand, Scissors, Sparkles, Star } from 'lucide-react';
const Services = () => {
  return (
    <section id="services" className="">
    <div className="container  py-10 px-10 flex flex-col gap-5 justify-center items-center ">
      <h1 className="text-6xl  font-bold text-primary mb-[0.5rem]">
        Our Services
      </h1>
      <h1 className="text-2xl  font-semibold text-black mb-[0.5rem]">
      Discover Our Exceptional Beauty Services Designed Just for You
        </h1>
      <div className="grid grod-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        <Card className="brutalism brutalism-hover">
          <CardHeader>
            <CardTitle>
            <Scissors size={50} />Haircuts and Styling
            </CardTitle>
          </CardHeader>
        <CardContent>
            <CardDescription>
            
            Transform your look with our expert haircuts and styling services. Whether you're looking for a trendy new cut or a classic style, our experienced stylists are here to make it happen.
            </CardDescription>
        </CardContent>
          
        </Card>
        <Card className="brutalism brutalism-hover">
          <CardHeader>
            <CardTitle>
            <Hand size={50} />
            Manicure and Pedicure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
            Indulge in a pampering session with our manicure and pedicure services. Treat your hands and feet to meticulous care and leave with nails that shine.
            </CardDescription>
        </CardContent>
        </Card>
        <Card className="brutalism brutalism-hover">
          <CardHeader>
            <CardTitle>
            <Sparkles size={50} />
            Facial Treatments
            </CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription>
            Revitalize your skin with our rejuvenating facial treatments. From deep cleansing to nourishing masks, our treatments are designed to enhance your natural beauty.
            </CardDescription>
        </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default Services