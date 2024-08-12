import React from "react";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500">
      <div className="lg:col-span-3 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#000000]">How It Works</h1>
        <p className="py-4 text-center">
          Fill out a form and also work through it with one of our advisors if
          you have any questions. We’re made to fit your schedule— You can build
          your plan for 1:1 classes at a frequency and time that work best for
          you.
        </p>
      </div>
      <div className="lg:col-span-3 flex justify-between mt-6 space-x-8">
        <div>
          <h6 className="font-medium text-gray-700">1. Sign Up</h6>
          <p>
            Pick the course that aligns with your family’s learning goals in the
            sign up form. At the time of signup, we’ll ask you for more details
            about your student. You can make a course selection or compare
            courses with an advisor during a free consultation. Feel free to go
            through the form with an advisor.
          </p>
        </div>
        <div>
          <h6 className="font-medium text-gray-700">2. Match</h6>
          <p>
            We’ll hand-match your child with an instructor and schedule your
            placement class. In the placement class, our instructors get to know
            your child, go over all available tools and resources, and assess
            their level in the specific subject. They will then confirm the
            course selection and any additional needs.
          </p>
        </div>
        <div>
          <h6 className="font-medium text-gray-700">3. Schedule</h6>
          <p>
            Submit your availability and child’s details. Your child will be
            matched with their ongoing instructor to continue with weekly
            50-minute on-on-one classes. You’ll have an opportunity at sign-up
            to make any instructor requests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
