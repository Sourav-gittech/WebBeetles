/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutBanner() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-1"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                WebBeetles Inspiring Your
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Journey-
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                Every Step, Everywhere
              </h2>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center lg:justify-end order-2 lg:order-2"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
            >
              {/* Image container with bottom blur */}
              <div className="relative">
                <img
                  src="/about/aboutbanner.jpg"
                  alt="Happy customer"
                  className="relative z-10 w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-lg sm:rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-64 sm:h-80 md:h-96 lg:h-[80vh] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <span class="text-white/50 text-xs sm:text-sm px-4 text-center">Image: aboutbanner.jpg</span>
                      </div>
                    `;
                  }}
                />

                {/* Bottom Blur Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 md:h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl"
      ></motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl"
      ></motion.div>
    </div>
  );
}