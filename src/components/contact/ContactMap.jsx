import React from 'react'
import { motion } from 'framer-motion';

const ContactMap = () => {
    return (
        <motion.section
            className="w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[800px] xl:h-[900px] relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div
                className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 z-10 pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)'
                }}
            ></div>

            <iframe
                title="Google Map - Newtown Ecospace Kolkata"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0977359286847!2d88.48969931495822!3d22.57596998517472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275474e4a8673%3A0x4f8e741c3b6e4e4e!2sEcospace%20Business%20Park%2C%20New%20Town%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[50%] brightness-90 contrast-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </motion.section>
    )
}

export default ContactMap