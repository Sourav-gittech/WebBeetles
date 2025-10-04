import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const ContactDesc = () => {
    return (
        <section className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-20 py-12 md:py-16 max-w-[1920px] mx-auto">
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactDesc