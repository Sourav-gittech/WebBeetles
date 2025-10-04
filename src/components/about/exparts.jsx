import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Facebook, Twitter, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

const SocialButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border-2 border-white/60 bg-white/10 
              backdrop-blur-sm flex items-center justify-center hover:bg-white/30 
              hover:border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
  >
    {children}
  </a>
);

const OurExpertsSection = () => {
  const instructors = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Senior UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Liam Garcia",
      role: "Full Stack Web Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Graphic Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "Noah Anderson",
      role: "Mobile App Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 5,
      name: "Olivia Brown",
      role: "UI/UX Specialist",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 6,
      name: "James Taylor",
      role: "Backend Engineer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
  ];

  return (
    <section className="bg-black min-h-screen py-12 sm:py-6 lg:py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 sm:mb-12 lg:mb-16 gap-6 lg:gap-8">
          {/* Left Side - Title with Badge */}
          <div className="text-left lg:max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sans">
              Meet Our <span className="text-purple-700">Instructors</span>
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="lg:max-w-md text-left lg:text-right lg:pt-12">
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-sans">
              Discover a variety of in-demand learning categories designed to elevate your skills and boost your career
            </p>
          </div>
        </div>

        {/* Swiper Carousel with Custom Arrows */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: true
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-6 sm:pb-8 lg:pb-10"
          >
            {instructors.map((instructor) => (
              <SwiperSlide key={instructor.id}>
                <div className="bg-purple-800 rounded-[4rem] overflow-hidden shadow-2xl group mx-2 sm:mx-0">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-[3rem]">
                    <img
                      src={instructor.image}
                      alt={`Portrait of ${instructor.name}, ${instructor.role}`}
                      className="w-full h-64 sm:h-72 md:h-80 lg:h-95 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover Overlay with Social Icons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                      <SocialButton href={instructor.social.facebook}>
                        <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                      </SocialButton>
                      <SocialButton href={instructor.social.twitter}>
                        <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                      </SocialButton>
                      <SocialButton href={instructor.social.linkedin}>
                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                      </SocialButton>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="bg-purple-700/30 p-6 sm:p-8 text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 font-sans">
                      {instructor.name}
                    </h3>
                    <p className="text-white text-sm sm:text-base font-sans">{instructor.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>



          {/* Custom Navigation Arrows */}
          <button
            className="swiper-button-prev-custom absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100/30 hover:bg-purple-600/50 backdrop-blur-md border border-white text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl  focus:outline-none focus:ring-2 focus:ring-purple-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={4} />
          </button>
          <button
            className="swiper-button-next-custom absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100/30 hover:bg-purple-600/50 backdrop-blur-md border border-white text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl  focus:outline-none focus:ring-2 focus:ring-purple-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={4} />
          </button>
        </div>
      </div>




    </section>
  );
};

export default OurExpertsSection;
