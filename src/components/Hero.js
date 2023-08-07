import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80"
        alt="Sea"
        className="w-full h-full object-cover"
      />

      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Special trip</h1>
          <h2 className="italic py-4 text-4xl">With Weekway</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            odit possimus, asperiores maxime in pariatur nostrum libero eos
            harum voluptas dignissimos at cum quo maiores iure ea ratione
            suscipit obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
