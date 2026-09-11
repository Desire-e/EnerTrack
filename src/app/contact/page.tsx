"use client";

// import { useState } from "react";
import ContactForm from '../contact/_components/ContactForm'

export default function Contact() {

    return (
        <main>
            {/* Content */}
            <div className="flex flex-wrap w-full mx-auto py-20 justify-center md:divide-x-1 divide-black/20 gap-15">
                <section className='flex flex-col gap-10 w-full md:max-w-[45%] md:px-20 px-10'>
                    <div className="font-heading">
                        <p className="text-teal-700 md:tracking-[0.25em] tracking-[0.1em]">
                            GET IN TOUCH
                        </p>                
                        <h1 className="md:text-5xl text-4xl font-bold">Let&apos;s talk about your energy performance.</h1>
                    </div>

                    <div className="flex flex-col gap-5 text-black/60">
                        <p>
                            Have questions about our energy monitoring solutions? Tell us about your facility, your current challenges, or what you would like to improve.
                        </p>
                        <p>
                            Provide your information and our team will get back to you shortly.
                        </p>                        
                    </div>
                </section>
                
                <ContactForm />
            </div>  
        </main>
  );
}