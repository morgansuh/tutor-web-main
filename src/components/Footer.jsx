import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#000000]">
          PRIME TUTORING
        </h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-700">How It Works</h6>
          <ul>
            <li className="py-2 text-sm">Tutoring</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Instructors</li>
            <li className="py-2 text-sm">Reviews</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-700">Subjects</h6>
          <ul>
            <li className="py-2 text-sm">Math</li>
            <li className="py-2 text-sm">Reading</li>
            <li className="py-2 text-sm">Writing</li>
            <li className="py-2 text-sm">Programming</li>
            <li className="py-2 text-sm">Help with Schoolwork</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-700">Resources</h6>
          <ul>
            <li className="py-2 text-sm">FAQ</li>
            <li className="py-2 text-sm">Our Instructors</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-700">About</h6>
          <ul>
            <li className="py-2 text-sm">Our Story</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
