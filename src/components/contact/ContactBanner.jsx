import React from 'react'
import { motion } from 'framer-motion';

const ContactBanner = () => {
    return (
        <div className='bg-gradient-to-b from-[#7A00FF] via-[#25004D] to-black text-white min-h-screen flex items-center justify-center px-6 lg:px-16'>

            <section className="bg-gradient-to-b from-[#7A00FF] via-[#25004D] to-black text-white min-h-screen flex items-center justify-center px-6 lg:px-16">
                <div className="pt-16 sm:pt-18 lg:pt-20 pb-8 sm:pb-12 lg:pb-20 min-h-screen flex items-center">
                    <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            {/* Contact tag */}
                            {/* <span className="inline-flex items-center gap-2 border border-purple-500 px-4 py-1 rounded-full text-sm tracking-wide mb-6">
                                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                    CONTACT US
                                </span> */}

                            {/* Heading */}
                            <motion.div
                                className="max-w-xl w-full"
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.h1
                                    className="text-3xl sm:text-4xl lg:text-6xl xl:text-6xl font-bold leading-tight md:leading-snug mb-4 md:mb-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    Have questions or need{" "}
                                    <span className="bg-gradient-to-r from-purple-700 to-purple-800 bg-clip-text text-transparent">
                                        support?
                                    </span>{" "}
                                    <br className="hidden sm:block" />
                                    Reach out to Us
                                </motion.h1>

                                <motion.p
                                    className="text-gray-400 text-base md:text-lg"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    We're here to help you succeed. Get in touch with our team anytime for assistance or inquiries about our courses and services – we're just a message away!
                                </motion.p>
                            </motion.div>

                            {/* <div className="flex gap-2 bg-gray-900 rounded-full p-2 w-max shadow-lg">
                    <button className="px-6 py-2 rounded-full text-white">
                        Home
                    </button>
                    <button className="px-6 py-2 rounded-full bg-purple-600 text-white shadow-md">
                        Contact Us
                    </button>
                </div> */}
                        </div>

                        {/* Right Image */}
                        <div className="flex-1">
                            <div className="rounded-[40px] overflow-hidden">
                                <img src="/images/contact-banner.png"
                                    alt="Happy Learner" className="w-72 sm:w-96 lg:w-[28rem] xl:w-[32rem] object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactBanner