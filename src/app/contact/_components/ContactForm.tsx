"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactFormState } from '@/app/contact/_utils/validation';
import { AnimatePresence, motion } from "motion/react";


// create ContactFormState object, to define initial state of form
const initialState: ContactFormState = {
    errors: {},
    values: {
        name: "", 
        email: "", 
        message: ""
    },
    message: "",
    success: false,
};

export default function ContactForm() {
    
    // Executes a server action (sendContactMessage) and saves data returned (in state)
    // state - result returned by sendContactMessage
    // formAction - action to send form
    const [state, formAction] = useActionState(
        sendContactMessage,
        initialState
    );

    return (
        <div className='flex flex-col gap-10 w-full lg:max-w-[45%] xl:px-20 px-10'>
            
            <form action={formAction}
            className="flex flex-col gap-6 w-full">
                    
                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" // assigns label with input id  
                    className="font-medium">Name</label>

                    <input id="name" name="name" type="text" 
                    placeholder="Your name" defaultValue={state.values.name}
                    className={`border rounded-sm px-3 py-2 outline-none transition-colors duration-300 ${
                        state.errors?.name ? 
                        "border-red-600 focus:border-red-600" : 
                        "border-gray-300 focus:border-black"
                        }`
                    }/>

                    {/* Error message, shows if exists */}
                    
                    {/* Animation - message appears from down to up */}
                    
                    {/* AnimatePresence to animate elements that will appear/disappear of the DOM.
                    mode="wait" prevents an animation from starting until the previous one finishes 
                    (in case of more than one error in the error array).*/}
                    <AnimatePresence mode="wait">
                    {state.errors?.name && (
                        <motion.p 
                        key="name-error"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, ease: "easeOut",}}
                        className="text-sm text-red-600">
                            {state.errors.name[0]}
                        </motion.p>
                    )}
                    </AnimatePresence>

                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium">Email</label>

                    <input id="email" name="email" type="text" 
                    placeholder="you@mail.com" defaultValue={state.values.email}
                    className={`border rounded-sm px-3 py-2 outline-none transition-colors duration-300 ${
                        state.errors?.email ? 
                        "border-red-600 focus:border-red-600" : 
                        "border-gray-300 focus:border-black"
                        }`
                    }/>

                    {/* Error message, shows if exists */}
                    <AnimatePresence mode="wait">
                    {state.errors?.email && (
                        <motion.p 
                        key="email-error"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, ease: "easeOut",}}
                        className="text-sm text-red-600">
                            {state.errors.email[0]}
                        </motion.p>
                    )}
                    </AnimatePresence>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-medium">Message</label>

                    <textarea id="message" name="message" 
                    placeholder="Tell us about your needs..." rows={6} defaultValue={state.values.message}
                    className={`border rounded-sm px-3 py-2 outline-none transition-colors duration-300 ${
                        state.errors?.message ? 
                        "border-red-600 focus:border-red-600" : 
                        "border-gray-300 focus:border-black"
                        }`
                    }/>

                    <AnimatePresence mode="wait">
                    {state.errors?.message && (
                        <motion.p 
                        key="message-error"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, ease: "easeOut",}}
                        className="text-sm text-red-600">
                            {state.errors.message[0]}
                        </motion.p>
                    )}
                    </AnimatePresence>
                </div>


                <div className="flex flex-col gap-6">

                    {/* Messagge success */}
                    
                    {/* Animation - message is displayed */}
                    
                    <AnimatePresence initial={false}>
                        {state.message && (
                            <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                height: { duration: 0.35, ease: [0.4, 0, 0.2, 1], },
                                opacity: { duration: 0.2, },
                            }}
                            className="overflow-hidden">
                                <div className="flex gap-2 items-center bg-teal-600/10 text-sm text-emerald-700 p-4 rounded-sm">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p>{state.message}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit button */}
                    <motion.button 
                    layout="position"
                    transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
                    type="submit" 
                    className="bg-black text-white px-6 py-3 rounded-sm font-medium hover:bg-teal-950 transition duration-300 ease-in-out">
                        Send message
                    </motion.button>
                </div>             
                
            </form>

        </div>
  );
}