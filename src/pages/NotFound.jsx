import React from 'react'

const NotFound = () => {
  return (
    <section id="" className="">
    <div className="container  py-10 flex flex-row-reverse -mt-[5rem] 2xl:mt-0  gap-5 justify-center items-center h-screen  ">
      <div className="text-center">
        <h1 className="text-6xl md:text-5xl lg:text-6xl  font-bold text-destructive mb-[0.5rem]">
        Sorry, You're Forbidden from Accessing This Page
        </h1>
       
        
      </div>
      <img
        src="noFound.png"
        className="w-[20rem] lg:w-[25rem] hidden md:block "
        alt=""
      />
    </div>
  </section>
  )
}

export default NotFound