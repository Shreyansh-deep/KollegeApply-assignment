import React from "react";
import mainImage from "../assets/image 24.png";
import data from "../data.json";
import { MdChevronRight } from "react-icons/md";

const Detail = ({ setDetailPageToggle }) => {
  const limitedData = data.slice(0, 4);
  return (
    <div className="px-24 py-10">
      {/* this back text just i have added for the convinience you can go to privious page by clicking on this*/}
      <div
        onClick={() => setDetailPageToggle(false)}
        className="underline font-bold font-sans cursor-pointer"
      >
        Back
      </div>
      <div className="flex gap-2 items-center">
        <p className="font-sans cursor-pointer text-gray-400">
          News Listing Page{" "}
        </p>
        <MdChevronRight style={{ color: "gray" }} />
        <p className="font-sans cursor-pointer text-purple-800 font-semibold">
          individual News
        </p>
      </div>
      <div className="flex gap-10">
        <div>
          <img src={mainImage} className="" alt="main image" />
          <div className="pl-5">
            <h3 className="font-800 text-3xl mt-10 font-bold">
              Chitkara University MBA Admission Open;
            </h3>
            <h3 className="font-800 text-3xl font-bold">
              Check Direct LIst....
            </h3>
            <p className="text-pink-500 mt-5">20 sep 2023, 8:00pm </p>
            <p className="mt-5">
              New Delhi: The State Common Entrence Test Cell, Goverment of
              Maharastra, has issued the admit cards for the MArch, MHMCT, BEd,
              and MPEd Cources on February 27,2024. To download the document...
            </p>
            <p className="pt-5">
              We offer a diverse range of extracurricular activities aimed at
              enhancing personal growth, skill development, and building lasting
              connections. From cultural events to sports, competitions, and
              workshops, students have ample opportunities to refine their
              communication and critical thinking abilities while pursuing their
              passions.
            </p>{" "}
            <p className="pt-5">
              As individuals with dual responsibilities towards the institute
              and its students, our primary objective is to cultivate an
              enriching learning environment. We contribute to the institute by
              delivering high-quality education, aligning with institutional
              goals, and promoting a positive academic atmosphere. Towards
              students, we act as facilitators of learning, providing support,
              mentorship, and guidance for their intellectual, social, and
              emotional growth.
            </p>
            <p className="pt-5">
              Graduates from our institute, particularly those in nursing, have
              a wide array of career opportunities. With essential clinical
              skills, specialization options, and global practice opportunities,
              they are well-equipped for rewarding careers dedicated to
              improving health and well-being while making a meaningful impact
              on communities worldwide.
            </p>
            <p className="pt-5">
              The paramount strength of our institute lies in its ability to
              provide a transformative educational experience. With robust
              academic programs, committed faculty, and abundant resources, we
              empower students to cultivate critical thinking, broaden their
              knowledge, and become well-rounded, educated citizens prepared to
              make significant contributions to society.
            </p>
            <p className="pt-5">
              To the youth and aspiring students, I encourage adopting a growth
              mindset, setting clear goals, and mastering effective time
              management. Nurture curiosity, seek mentorship, and prioritize
              well-being while remaining adaptable in a rapidly evolving world.
              Remember, success is a continuous journey—embrace the process,
              seize opportunities, and never stop learning.
            </p>
            <p className="pt-5">
              {" "}
              To the youth and aspiring students, I encourage adopting a growth
              mindset, setting clear goals, and mastering effective time
              management. Nurture curiosity, seek mentorship, and prioritize
              well-being while remaining adaptable in a rapidly evolving world.
              Remember, success is a continuous journey—embrace the process,
              seize opportunities, and never stop learning.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="bg-purple-800 text-white w-96 text-center px-10 py-2 rounded-lg cursor-pointer">
            Apply Now
          </p>
          <p className="bg-purple-200 text-purple-800 font-semibold w-96 text-center px-10 py-2 rounded-lg cursor-pointer">
            Download Brochure
          </p>
          <p className="bg-purple-400 text-black font-semibold w-96 text-center px-10 py-5 rounded-lg mt-5">
            Advertisment banner
          </p>
          <p className="bg-blue-300 text-black font-semibold w-96 text-center px-10 py-5 rounded-lg">
            Advertisment banner
          </p>
          <p className="bg-yellow-200 text-black font-semibold w-96 text-center px-10 py-5 rounded-lg">
            Advertisment banner
          </p>
          <div className="flex flex-col mt-10">
            <h3 className="font-bold text-purple-800 text-2xl mb-5 italic">
              NEWS
            </h3>
            {limitedData.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
