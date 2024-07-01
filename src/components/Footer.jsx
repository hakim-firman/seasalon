import { PhoneCall } from 'lucide-react'
import React from 'react'
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
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
  )
}

export default Footer