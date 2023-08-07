import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form className="w-full items-center">
        <div className="flex flex-col my-2 py-2 ">
          <label>Destination</label>
          <select className="border rounded-md p-2">
            <option value="">GrandeAntika</option>
            <option value="">Key west</option>
            <option value="">Maldives</option>
            <option value="">Cozumel</option>
          </select>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col  my-2 p-2">
            <label htmlFor="">Chek in</label>
            <input
              type="date"
              name=""
              id=""
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col  my-2 p-2">
            <label htmlFor="">Chek out</label>
            <input
              type="date"
              name=""
              id=""
              className="border rounded-md p-2"
            />
          </div>
        </div>
        <div className="flex flex-col p-2 w-full">
          <label>Search</label>
          <button className="w-full">Rate an Availability</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
