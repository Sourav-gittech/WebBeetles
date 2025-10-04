// src/pages/Courses.jsx (or app/courses/page.jsx if using App Router)

// import React from "react";


// const Courses = () => {
//     return (
//         <div className="bg-black text-white min-h-screen">
//             {/* Hero Section */}
//             <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-20 pb-16">
//                 {/* Left Content */}
//                 <div className="max-w-xl">
//                     {/* Label */}
//                     <span className="inline-flex items-center gap-2 border border-purple-500 px-4 py-1 rounded-full text-sm tracking-wide mb-6">
//                         <span className="w-2 h-2 rounded-full bg-purple-500"></span>
//                         COURSES DETAILS
//                     </span>

//                     {/* Heading */}
//                     <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
//                         User Experience Design <br />
//                         <span className="text-purple-500">Fundamentals.</span>
//                     </h1>


//                 </div>

//                 {/* Right Image */}
//                 <div className="mt-6 md:mt-0 md:ml-8">
//                     <img
//                         src="https://img.freepik.com/free-photo/happy-smiling-girl-purple-background_23-2148286567.jpg"
//                         alt="Course Preview"
//                         className="w-[400px] md:w-[500px] lg:w-[550px] rounded-tr-[60px] rounded-bl-[60px]"
//                     />
//                 </div>
//             </section>

//         </div>
//     );
// };

// export default Courses;


//..................modified..........//
//...........................................//



// import React from "react";
// import { FaCheckCircle, FaPlayCircle, FaShoppingCart } from "react-icons/fa";

// const lessons = [
//   "Introduction to UX and Human-Centered Design",
//   "Research Methods & User Personas",
//   "Wireframing Basics & Design Tools",
//   "Prototyping: From Low-Fidelity to High-Fidelity",
//   "Usability Testing & Gathering Feedback",
//   "Case Study Project & Final Presentation",
// ];

// const Courses = () => {
//   return (
//     <div className="bg-black text-white min-h-screen px-6 md:px-16 py-12">
//       {/* Hero Section */}
//       <section className="relative flex flex-col md:flex-row items-center justify-between pb-16">
//         {/* Left Content */}
//         <div className="max-w-xl">
//           <span className="inline-flex items-center gap-2 border border-purple-500 px-4 py-1 rounded-full text-sm tracking-wide mb-6">
//             <span className="w-2 h-2 rounded-full bg-purple-500"></span>
//             COURSES DETAILS
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
//             User Experience Design <br />
//             <span className="text-purple-500">Fundamentals.</span>
//           </h1>
//         </div>

//         {/* Right Image */}
//         <div className="mt-6 md:mt-0 md:ml-8">
//           <img
//             src="https://img.freepik.com/free-photo/happy-smiling-girl-purple-background_23-2148286567.jpg"
//             alt="Course Preview"
//             className="w-[400px] md:w-[500px] lg:w-[550px] rounded-tr-[60px] rounded-bl-[60px]"
//           />
//         </div>
//       </section>

//       {/* Course Details Section */}
//       <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Left Side - About the Course */}
//         <div className="lg:col-span-2">
//           <img
//             src="https://kits.rometheme.net/relearn/wp-content/uploads/sites/50/2025/05/img-3.webp"
//             alt="Course Laptop"
//             className="rounded-2xl mb-6"
//           />

//           <h2 className="text-2xl font-bold mb-4">About The Course</h2>
//           <p className="text-gray-300 mb-6">
//             This course is carefully crafted to introduce you to the core principles of User Experience (UX) Design.
//             You’ll learn how to create intuitive and engaging digital products through real-world projects and hands-on
//             activities. Whether you’re new to design or looking to sharpen your existing skills, this course will help you
//             understand what makes a product not just usable—but delightful.
//           </p>

//           {/* Key Points */}
//           <h3 className="text-xl font-semibold mb-3">Key points</h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
//             <li className="flex items-center gap-2">
//               <FaCheckCircle className="text-purple-500" /> Core principles of human-centered design
//             </li>
//             <li className="flex items-center gap-2">
//               <FaCheckCircle className="text-purple-500" /> Case studies & practical examples
//             </li>
//             <li className="flex items-center gap-2">
//               <FaCheckCircle className="text-purple-500" /> Wireframing & prototyping basics
//             </li>
//             <li className="flex items-center gap-2">
//               <FaCheckCircle className="text-purple-500" /> Usability testing & feedback collection
//             </li>
//             <li className="flex items-center gap-2">
//               <FaCheckCircle className="text-purple-500" /> Designing across devices
//             </li>
//             <li className="flex items-center gap-2">
//               <FaCheckCircle className="text-purple-500" /> Applying design critiques & revisions
//             </li>
//           </ul>

//           {/* Lessons Accordion */}
//           <h3 className="text-xl font-semibold mb-3">Lessons of the Course</h3>
//           <div className="space-y-3">
//             {lessons.map((lesson, idx) => (
//               <button
//                 key={idx}
//                 className={`flex items-center justify-between w-full px-5 py-3 rounded-xl border ${
//                   idx === 0 ? "bg-purple-600 text-white" : "bg-gray-900 border-gray-700 text-gray-300"
//                 }`}
//               >
//                 {lesson}
//                 <FaPlayCircle className={`${idx === 0 ? "text-white" : "text-purple-400"}`} />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Side - Instructor Card */}
//         <div className="bg-gray-900 p-6 rounded-2xl">
//           {/* Video Placeholder */}
//           <div className="relative mb-6">
//             <img
//               src="https://img.freepik.com/free-photo/happy-smiling-girl-purple-background_23-2148286567.jpg"
//               alt="Instructor"
//               className="rounded-xl"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <FaPlayCircle className="text-white text-5xl opacity-80" />
//             </div>
//           </div>

//           {/* Instructor Info */}
//           <h3 className="text-lg font-semibold mb-2">Instructor</h3>
//           <div className="flex items-center gap-3 mb-6">
//             <img
//               src="https://randomuser.me/api/portraits/women/44.jpg"
//               alt="Instructor"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <p className="font-semibold">Sarah Mitchell</p>
//               <p className="text-sm text-gray-400">Senior UX Designer</p>
//             </div>
//           </div>

//           {/* Course Includes */}
//           <h3 className="text-lg font-semibold mb-3">This course includes:</h3>
//           <ul className="space-y-2 mb-6 text-gray-300">
//             <li>54 hours on-demand video</li>
//             <li>Downloadable resources</li>
//             <li>Compatible with all devices</li>
//             <li>Certificate of completion</li>
//           </ul>

//           {/* Price & Button */}
//           <div className="flex flex-col items-start">
//             <p className="text-purple-500 text-2xl font-bold mb-2">
//               $50 <span className="line-through text-gray-400 text-base ml-2">$100</span>
//             </p>
//             <button className="flex items-center gap-2 bg-purple-600 px-5 py-3 rounded-full hover:bg-purple-700 transition">
//               <FaShoppingCart /> Add to Cart
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Courses;

//................Exact Modified................//


import React, { useState } from "react";
import { FaCheckCircle, FaRegClock, FaMobileAlt, FaCertificate } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { RiBookOpenLine } from "react-icons/ri";
import { useParams } from "react-router-dom";


const lessons = [
    "Introduction to UX and Human-Centered Design",
    "Research Methods & User Personas",
    "Wireframing Basics & Design Tools",
    "Prototyping: From Low-Fidelity to High-Fidelity",
    "Usability Testing & Gathering Feedback",
    "Case Study Project & Final Presentation",
];

const CourseDetails = () => {

    const { courseName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName);

    const [activeLesson, setActiveLesson] = useState(0);

    return (
        <div className="bg-black text-white min-h-screen px-6 md:px-16 py-12 pt-20">
            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center justify-between pb-16">
                {/* Left Content */}
                <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 border border-purple-500 px-4 py-1 rounded-full text-sm tracking-wide mb-6">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        COURSES DETAILS
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
                        User Experience Design <br />
                        <span className="text-purple-500">Fundamentals.</span>
                    </h1>
                </div>

                {/* Right Image */}
                <div className="mt-6 md:mt-0 md:ml-8">
                    <img
                        src="https://img.freepik.com/free-photo/happy-smiling-girl-purple-background_23-2148286567.jpg"
                        alt="Course Preview"
                        className="w-[400px] md:w-[500px] lg:w-[550px] rounded-tr-[60px] rounded-bl-[60px]"
                    />
                </div>
            </section>

            {/* Course Details Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Side - About the Course */}
                <div className="lg:col-span-2">
                    <img
                        src="https://kits.rometheme.net/relearn/wp-content/uploads/sites/50/2025/05/img-3.webp"
                        alt="Course Laptop"
                        className="rounded-2xl mb-6"
                    />

                    <h2 className="text-2xl font-bold mb-4">About The Course</h2>
                    <p className="text-gray-300 mb-6">
                        This course is carefully crafted to introduce you to the core principles of User Experience (UX) Design.
                        You’ll learn how to create intuitive and engaging digital products through real-world projects and hands-on
                        activities. Whether you’re new to design or looking to sharpen your existing skills, this course will help you
                        understand what makes a product not just usable—but delightful.
                    </p>

                    {/* Key Points */}
                    <h3 className="text-xl font-semibold mb-3">Key points</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-purple-500" /> Core principles of human-centered design
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-purple-500" /> Case studies & practical examples
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-purple-500" /> Wireframing & prototyping basics
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-purple-500" /> Usability testing & feedback collection
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-purple-500" /> Designing across devices
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-purple-500" /> Applying design critiques & revisions
                        </li>
                    </ul>

                    {/* Lessons Accordion */}
                    <h3 className="text-xl font-semibold mb-3">Lessons of the Course</h3>
                    <div className="space-y-3">
                        {lessons.map((lesson, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveLesson(idx === activeLesson ? null : idx)}
                                className={`flex items-center justify-between w-full px-5 py-3 rounded-xl border transition ${idx === activeLesson
                                        ? "bg-purple-600 text-white border-purple-600"
                                        : "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800"
                                    }`}
                            >
                                <span>{lesson}</span>
                                {idx === activeLesson ? (
                                    <FiChevronUp className="text-xl" />
                                ) : (
                                    <FiChevronDown className="text-xl" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side - Instructor Card */}
                <div className="bg-gray-900 p-6 rounded-3xl shadow-lg">
                    {/* Instructor Info */}
                    <h3 className="text-lg font-semibold mb-4">Instructor</h3>
                    <div className="flex items-center gap-3 mb-6">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Instructor"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className="font-semibold text-white">Sarah Mitchell</p>
                            <p className="text-sm text-gray-400">Senior UX Designer</p>
                        </div>
                    </div>

                    {/* Course Includes */}
                    <h3 className="text-lg font-semibold mb-3">This course includes:</h3>
                    <ul className="divide-y divide-gray-700 text-gray-300 mb-6">
                        <li className="flex items-center gap-3 py-3">
                            <FaRegClock className="text-purple-500" />
                            54 Hours of Learn-Anywhere Videos
                        </li>
                        <li className="flex items-center gap-3 py-3">
                            <RiBookOpenLine className="text-purple-500" />
                            Lifetime Learning Access
                        </li>
                        <li className="flex items-center gap-3 py-3">
                            <FaMobileAlt className="text-purple-500" />
                            Compatible with All Devices
                        </li>
                        <li className="flex items-center gap-3 py-3">
                            <FaCertificate className="text-purple-500" />
                            Certified Learning Achievement
                        </li>
                    </ul>

                    {/* Price & Button */}
                    <div className="flex flex-col items-start">
                        <p className="text-purple-500 text-2xl font-bold mb-4">
                            $50.00 <span className="line-through text-gray-400 text-base ml-2">$70.00</span>
                        </p>
                        <button className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-3 rounded-full hover:opacity-90 transition">
                            Add to Cart <HiArrowRight className="text-lg" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetails;



