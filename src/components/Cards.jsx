import React from 'react';
import Single from '../assets/books.png'
import Double from '../assets/pencil.png'
import Triple from '../assets/textbook.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Standard Package</h2>
              <p className='text-center text-4xl font-bold'>$35/hour</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Min. purchase of 5 sessions upfront</p>
                  <p className='py-2 border-b mx-8'>Personalized tutoring sessions</p>
                  <p className='py-2 border-b mx-8'>Progress tracking</p>
              </div>
              <button className='bg-[#88cbea] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
          </div>
          <div className='w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Basic Package</h2>
              <p className='text-center text-4xl font-bold'>$40/hour</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Flexibility: Schedule sessions whenever</p>
                  <p className='py-2 border-b mx-8'>Access to Ivy League tutors</p>
                  <p className='py-2 border-b mx-8'>Pay-as-you-go for each session</p>
              </div>
              <button className='bg-[#88cbea] text-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Premium Package</h2>
              <p className='text-center text-4xl font-bold'>$30/hour</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Min. purchase of 10 sessions upfront</p>
                  <p className='py-2 border-b mx-8'>Comphrensive exam preparation</p>
                  <p className='py-2 border-b mx-8'>Detailed feedback and assessment</p>
              </div>
              <button className='bg-[#88cbea] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;