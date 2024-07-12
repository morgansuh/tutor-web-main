import React from 'react';
import Laptop from '../assets/calling-laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#88cbea] font-bold '>Flexible Schedules, Expert Tutoring</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Meet with our expert tutors on your schedule!</h1>
          <p>
          No matter where you live we can find a specialized online tutor for you through our 1:1 tutoring program. 

          Location is no longer a barrier as you can find help whether you are an elementary, secondary, or college student. 

          Students receive a tailored program and support, while also achieving the same benefit of working at their own pace with a 
          tutor that has tailored the lesson to their individual needs and learning style.
          </p>
          <button className='bg-black text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Book a Constulation</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
