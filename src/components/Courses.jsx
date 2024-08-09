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
            K-12 Math
          </h4>
          <ul className="list-disc pl-5">
            <li>
              Our tutors work with students from grades 2-12 and are trained to
              work with students of all different ages with different levels of
              comprehension. We hand-match students with a tutor who is either
              studying math in college or excelled in math in high school.
            </li>
            <li>
              In each class, your child’s tutor will review the material,
              outline goals, and work with your child at their pace. Each class
              is customizable based on what material your child brings to work
              on.
            </li>
            <li>
              Tutors can assign extra projects and homework to students to work
              on between tutoring sessions to support their math learning or
              enforce certain concepts
            </li>
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
              and more. Most of our tutors are studying English in college or
              were excellent English students in high school
            </li>
            <li>
              Projects are selected according to the student's grade (from early
              elementary to high school), interests, and level of proficiency{" "}
            </li>
            <li>
              We offer an in-depth and imaginative communications curriculum for
              ages 7–18, from elementary-level English to ambitious electives
              like Novel Writing and Video Editing for public speaking
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid ">
        <div className="lg:col-span-2 my-4">
          <h4 className="md:text-2xl sm:text-xl text-l font-bold py-2 ">
            Computer Programming
          </h4>
          <ul className="list-disc pl-5">
            <li>
              Job demand for coding skills is projected to grow over 2x faster
              than other occupations. Prepare your kids for the modern world
              with 1:1 coding tutoring, no matter their experience level.
            </li>
            <li>
              Younger children (7-10) will learn through Scratch, a kid-friendly
              coding language that’s block-based and visual (like virtual
              LEGOs). Then they will move on to generate graphic art and build a
              game while learning Python, a powerful and widely used coding
              language.
            </li>
            <li>
              Advanced coding topics also taught: Java, C++, AP Computer
              Science, Web Development, or Data Science{" "}
            </li>
            <li>
              Courses consist of a lot of screen sharing and problem solving, as
              students and instructors work together on projects. There is also
              30-60 minutes of optional homework between classes to continue the
              learning outside of the class session.
            </li>
          </ul>
        </div>
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
    </div>
  );
};

export default Courses;
