import React from 'react';

const Courses = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 pr-'>
            Want to become a student or a tutor?
          </h1>
          <p>Sign up today! Students will get a tutor that best fits their needs and help them gain confidence in key concepts. All tutors will
        be personally vetted and trained to best assist students. </p>
        </div>
        <div className='my-4 pl-12'>
            <button className='bg-[#ffffff] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Sign Up
            </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
