import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 ">Send a message</h2>
      <p className="text-center text-gray-700 py-2">we're standing by.</p>
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt="contact"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
      
      <form>
        <div className="grid grid-cols-2">
          <input type="text" className=" border p-2 m-2" placeholder="First"/>
          <input type="text" className=" border p-2 m-2" placeholder="Last"/>
          <input type="email" className=" border p-2 m-2" placeholder="Email"/>
          <input type="tel" className=" border p-2 m-2" placeholder="Phone"/>
          <input type="text" className="border col-span-2 p-2 m-2" placeholder="Address"/>
          <textarea className="border col-span-2 p-2 m-2" id="" cols="30" rows="10"></textarea>
          <button className="col-span-2 m-2 ">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
