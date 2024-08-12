import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <h1 className="text-[#251a51] text-4xl font-bold text-center pb-10">
        Pricing & Session Details
      </h1>
      <p className="text-[#251a51] text-center pb-20 px-20">
        We offer both a Tutoring path and Curriculum path, both working 1:1 with
        the tutor. Depending on your goals we can schedule as many sessions as
        needed based on you and your child’s availability plus easy rescheduling
        up to 24 hours before class time. After each session you will also be
        emailed detailed notes about what was covered and plans for the next
        sessions.
      </p>

      <div className="text-[#251a51] max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Standard Package
          </h2>
          <p className="text-center text-4xl font-bold">$55/hour</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Min. purchase of 4 sessions upfront
            </p>
          </div>
          <button className="bg-[#1f2124] text-[#e7e6e6] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get Started
          </button>
        </div>
        <div className="w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">Basic Package</h2>
          <p className="text-center text-4xl font-bold">$60/hour</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Flexibility: Schedule hourly sessions
            </p>
          </div>
          <button className="bg-[#1f2124] text-[#e7e6e6] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get Started
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Premium Package
          </h2>
          <p className="text-center text-4xl font-bold">$50/hour</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Min. purchase of 6 sessions upfront
            </p>
          </div>
          <button className="bg-[#1f2124] text-[#e7e6e6] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
