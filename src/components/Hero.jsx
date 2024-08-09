import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div>
      <div className='max-w-[800px] mt-[-96px] mb-[-70px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        {/* <p className='text-[#000000] font-bold p-2'>
        Connecting Ivy League Tutors with K-12 Students
        </p>*/}
        <h1 className='text-[#251a51] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Top College Students, Personalized Learning.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='text-[#1c2448] md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Expert Tutoring in
          </p>
          <Typed
            className='text-[#1c2448] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Math', 'Reading', 'Writing', 'Programming']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-[#1c2448]'>
          Connecting Ivy League Tutors with K-12 Students.
        </p>
        <button className='bg-[#1f2124] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>
          Book a Consultation
        </button>
      </div>
    </div>
  );
};

export default Hero;
