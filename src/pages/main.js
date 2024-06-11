import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import mainImage from "../assets/image 24.png";
import data from "../data.json";
import AllNews from "../component/allNews";
import Admission from "../component/admission";
import CollegeNews from "../component/collegeNews";
import ExamNews from "../component/examNews";

const Main = ({ setDetailPageToggle, detailPageToggle }) => {
  const [showAll, setShowAll] = useState(false);
  const limitedData = showAll ? data : data.slice(0, 4);
  const [activeTab, setActiveTab] = useState("All News");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {!detailPageToggle && (
        <div className="px-20 ">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-fit flex gap-10 mt-6 p-2 bg-pink-200 rounded-lg cursor-pointer">
              <p>
                Trending Now: CBSE Class 12th Physics question paper 2024 set-3
              </p>
              <div className="flex items-center gap-2 ">
                <p>Check now</p>
                <FaArrowRight />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <div className="border p-2 border-gray-300 rounded-lg font-semibold cursor-pointer">
                All News
              </div>
              <div className="border p-2 border-gray-300 rounded-lg font-semibold cursor-pointer">
                Admission Alert
              </div>
              <div className="border p-2 border-gray-300 rounded-lg font-semibold cursor-pointer">
                College News
              </div>
              <div className="border p-2 border-gray-300 rounded-lg font-semibold cursor-pointer">
                Exams News
              </div>
              <div className="border p-2 border-gray-300 rounded-lg font-semibold cursor-pointer">
                Latest News
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="px-28 mt-10">
              <img src={mainImage} className="" alt="" />
              <h3 className="font-800 text-3xl mt-10 font-bold">
                Chitkara University MBA Admission Open;
              </h3>
              <h3 className="font-800 text-3xl font-bold">
                Check Direct LIst....
              </h3>
              <p className="text-pink-500 mt-5">20 sep 2023, 8:00pm </p>
              <p className="mt-5">
                New Delhi: The State Common Entrence Test Cell, Goverment of
                Maharastra, has issued the admit cards for the MArch, MHMCT,
                BEd, and MPEd Cources on February 27,2024. To download the
                document...
              </p>
              {/* when you click on this more text it willshow the detailed news page */}
              <p
                className="font-semibold mt-5 underline cursor-pointer"
                onClick={() => setDetailPageToggle(true)}
              >
                MORE..
              </p>
            </div>
            <div className="flex flex-row lg:flex-col mt-10">
              <h3 className="font-bold text-purple-800 text-2xl mb-5 italic">
                THE BIG STORIES
              </h3>
              {limitedData.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-col lg:flex-row items-center gap-4 mb-5">
                      <img src={item.image} alt="" className="w-40 h-40" />
                      <div className="flex flex-col">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-gray-600">{item.school}</p>
                        <p className="text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="border w-full"></div>
                  </div>
                );
              })}
              {data.length > 4 && (
                <button onClick={() => setShowAll(true)}>Show more</button>
              )}
            </div>
          </div>
          <div className="border border-yellow-400 p-10 overflow-auto">
            <p className="mb-10 font-bold text-yellow-500">FEATUREAD NEWS</p>
            <div className="flex gap-4">
              {limitedData.map((item) => {
                return (
                  <div className="flex text-sm">
                    <div className="flex flex-col w-72">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-600">{item.school}</p>
                      <p className="text-gray-500">{item.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex mx-10 lg:mx-80 my-20 border-2 border-gray-200 rounded-lg shadow-lg gap-4 justify-evenly items-center px-5 py-2 font-bold">
              <p
                className={`cursor-pointer ${
                  activeTab === "All News" ? "underline" : ""
                }`}
                onClick={() => handleTabClick("All News")}
              >
                All News
              </p>
              <p
                className={`cursor-pointer ${
                  activeTab === "College News" ? "underline" : ""
                }`}
                onClick={() => handleTabClick("College News")}
              >
                College News
              </p>
              <p
                className={`cursor-pointer ${
                  activeTab === "Exam News" ? "underline" : ""
                }`}
                onClick={() => handleTabClick("Exam News")}
              >
                Exam News
              </p>
              <p
                className={`cursor-pointer ${
                  activeTab === "Admission 2024" ? "underline" : ""
                }`}
                onClick={() => handleTabClick("Admission 2024")}
              >
                Admission 2024
              </p>
            </div>

            {activeTab === "All News" && <AllNews />}
            {activeTab === "College News" && <CollegeNews />}
            {activeTab === "Exam News" && <ExamNews />}
            {activeTab === "Admission 2024" && <Admission />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
