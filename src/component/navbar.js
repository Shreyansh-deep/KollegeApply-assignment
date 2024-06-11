import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "../assets/logo.png";
import data from "../data.json";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredData = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filteredData);
    setShowResults(true);
  };

  const handleBlur = () => {
    setShowResults(false);
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between shadow-lg p-5 px-10">
        <div className="flex flex-2/3 gap-10">
          <div className="flex items-center cursor-pointer">
            <img src={logo} className="w-10 h-10" alt="logo" />
            <p className="font-semibold">KollegeApply</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="font-semibold">University</p>
            <FaChevronDown />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="font-semibold">Colleges</p>
            <FaChevronDown />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="font-semibold">Exams</p>
            <FaChevronDown />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="font-semibold">Cources</p>
            <FaChevronDown />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="font-semibold">News</p>
            <FaChevronDown />
          </div>
        </div>
        <div className="flex relative flex-1/3 items-center gap-4 pr-10">
          <FaMagnifyingGlass />
          <input
            placeholder="Search for Colleges, Exams, Courses & more..."
            className="w-80 p-2"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            onBlur={handleBlur}
          />
          {showResults && (
            <ul className="absolute top-10 left-8 w-80 bg-white shadow-md z-10 overflow-y-auto h-96">
              {searchResults.map((item, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100">
                  <div className="flex items-center gap-4 mb-5">
                    <img src={item.image} alt="" className="w-40 h-40" />
                    <div className="flex flex-col">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-600">{item.school}</p>
                      <p className="text-gray-500">{item.date}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
