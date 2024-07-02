import React from 'react'

const About = () => {
  return (
    <section className="bg-white">
    <div className="container  py-10 px-10 flex flex-row-reverse gap-5 justify-center items-center ">
      <div className="">
        <h1 className="text-6xl  font-bold text-primary mb-[1rem]">
          Your Destination for Beauty and Elegance
        </h1>
        <h1 className="text-2xl  font-semibold text-black mb-[0.5rem]">
          Discover your new look with us. Schedule a visit and embrace the
          elegance of Seasalon.
        </h1>
        <h1 className="text-xl  font-normal text-black mb-[2rem]">
          At Seasalon, we are committed to redefining beauty and elegance
          with our exceptional services. Our salon offers a blend of luxury,
          comfort, and expert care, tailored to enhance your unique style.
          With a team of dedicated professionals, we ensure that every
          experience is personalized, leaving you feeling refreshed and
          confident.
        </h1>
      </div>
      <img
        src="about.png"
        className="w-[20rem] md:w-[25rem]  hidden md:block"
        alt=""
      />
    </div>
  </section>
  )
}

export default About