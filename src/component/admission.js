import React from "react";
import data from "../data.json";

const Admission = () => {
  return (
    <div>
      <h2 className="font-bold">This is Admission tab</h2>
      <div className="flex flex-wrap justify-center gap-10 bg-slate-100 py-10 rounded-3xl">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-1/4 md:w-1/2 lg:w-1/4 xl:w-1/4 p-1 border-white border-8 rounded-lg"
            >
              <img src={item.image} className="w-80 h-80" alt=""/>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className=" text-xs">{item.school}</p>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admission;
