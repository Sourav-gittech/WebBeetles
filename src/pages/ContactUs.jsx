import React from "react";
import ContactBanner from "../components/contact/ContactBanner";
import ContactMap from "../components/contact/ContactMap";
import PreFooterCTA from "../components/prefooter";
import ContactDesc from "../components/contact/ContactDesc";

const ContactUs = () => {
    return (
        <>
            <ContactBanner />
            <ContactDesc />
            <ContactMap />
            <PreFooterCTA />
        </>
    );
}

export default ContactUs;