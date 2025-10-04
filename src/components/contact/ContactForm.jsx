import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md'
import { useForm } from 'react-hook-form';

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: "easeOut" }
};

const ContactForm = () => {
    const sectionRef = useRef(null),
        form = useForm(),
        { register, handleSubmit, formState, reset } = form,
        { errors } = formState;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const submitQuery = (data) => {
        setIsSubmitting(true);
        console.log('Query data', data);

        setTimeout(() => {
            reset();
            setIsSubmitting(false);
            setSubmitStatus("success");
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const headerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            className="bg-gradient-to-br from-purple-700 to-black/30 border border-purple-500 p-6 sm:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-300 w-full"
            variants={scaleIn}
        >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4 text-white text-center transition-colors duration-300">
                Send Us Message
            </h3>
            <p className="text-purple-100 mb-6 md:mb-8 text-sm md:text-base text-center transition-colors duration-300">
                Let us know how we can help by filling out the form below.
            </p>

            {submitStatus === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-3 md:p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white text-sm md:text-base shadow-lg"
                >
                    Message sent successfully! We'll get back to you soon.
                </motion.div>
            )}

            <form className="space-y-4 md:space-y-5" id='contact-form' onSubmit={handleSubmit(submitQuery)}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2">
                        <motion.input
                            type="text"
                            {...register('name', { required: "Required*" })}
                            placeholder="Your Name"
                            className="w-full p-3 md:p-4 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300 placeholder:text-white/60 text-white text-sm md:text-base"
                            whileFocus={{ scale: 1.02 }}
                        />
                        <p className="text-xs text-red-400 mt-1">{errors.name?.message}</p>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <motion.input
                            type="email"
                            {...register('email', {
                                required: "Required*",
                                pattern: {
                                    value: /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-zA-Z.]{2,}$/,
                                    message: 'Invalid email'
                                }
                            })}
                            placeholder="Your Email"
                            className="w-full p-3 md:p-4 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300 placeholder:text-white/60 text-white text-sm md:text-base"
                            whileFocus={{ scale: 1.02 }}
                        />
                        <p className="text-xs text-red-400 mt-1">{errors.email?.message}</p>
                    </div>
                </div>

                <div className="w-full">
                    <motion.input
                        type="text" name="subject" {...register('subject', {
                            required: "Required*"
                        })} placeholder="Your Subject" className="w-full p-3 md:p-4 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300 placeholder:text-white/60 text-white text-sm md:text-base"
                        whileFocus={{ scale: 1.02 }} />
                    <p className="text-xs text-red-400 mt-1">{errors.subject?.message}</p>
                </div>
                
                <div className="w-full">
                    <motion.textarea
                        name="message" {...register('message', {
                            required: "Required*",
                            maxLength: {
                                value: 150,
                                message: "message can't be more than 150 characters"
                            }
                        })} placeholder="Your Message" rows={5} className="w-full p-3 md:p-4 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none placeholder:text-white/60 text-white text-sm md:text-base"
                        whileFocus={{ scale: 1.02 }} />
                    <p className="text-xs text-red-400 mt-0">{errors.message?.message}</p>
                </div>

                <motion.button
                    type="submit" disabled={isSubmitting}
                    className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-purple-700 hover:border-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-semibold text-sm md:text-base shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 w-full sm:w-auto"
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                    <MdArrowOutward className='inline mb-1' /> {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
            </form>
        </motion.div>
    )
}

export default ContactForm