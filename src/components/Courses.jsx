import React from "react";

const Courses = () => {
  return (
    <div className="w-full py-16 text-gray-800 px-4">
      <div className="max-w-[1240px] mx-auto grid ">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
          Our Courses
        </h1>
      </div>

      <div className="max-w-[1240px] mx-auto grid ">
        <div className="lg:col-span-2 my-4">
          <h4 className="md:text-2xl sm:text-xl text-l font-bold py-2 ">
            1:1 ACT/SAT Sessions
          </h4>
          <ul className="list-disc pl-5">
            <li>
              Test Aim: Perfect scores on either or both sections
              (Reading/Writing and Math)
            </li>
            <li>
              Unlimited access to practice tests, review of incorrect/missed
              questions{" "}
            </li>
            <li>Customized and specialized classes from tier 1 tutors</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid ">
        <div className="lg:col-span-2 my-4">
          <h4 className="md:text-2xl sm:text-xl text-l font-bold py-2 ">
            1:1 Creative and Academic Writing
          </h4>
          <ul className="list-disc pl-5">
            <li>
              In genres/subjects including but not limited to Poetry, Short
              Stories, Philosophy, History, Economics, Psychology, Theology, Law
              and more
            </li>
            <li>
              Projects are selected according to the student's grade, interests,
              and level of proficiency{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid ">
        <div className="lg:col-span-2 my-4">
          <h4 className="md:text-2xl sm:text-xl text-l font-bold py-2 ">
            AP Test Concepts
          </h4>
          <p>
            Students will get a tutor that best fits their needs and help them
            gain confidence in key concepts. All tutors are personally vetted
            and are experts in each subject.{" "}
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid ">
        <div className="lg:col-span-2 my-4">
          <h4 className="md:text-2xl sm:text-xl text-l font-bold py-2 ">
            Computer Programming
          </h4>
          <p>
            Students will get a tutor that best fits their needs and help them
            gain confidence in key concepts. All tutors are personally vetted
            and are experts in each subject.{" "}
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid ">
        <div className="lg:col-span-2 my-4">
          <h4 className="md:text-2xl sm:text-xl text-l font-bold py-2 ">
            K-8 School Subjects
          </h4>
          <p>
            Students will get a tutor that best fits their needs and help them
            gain confidence in key concepts. All tutors are personally vetted
            and are experts in each subject.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
