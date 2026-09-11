"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactFormState } from '../../utils/contact/validation';

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
        <section className='flex flex-col md:gap-15 gap-10 w-full md:max-w-[45%] md:px-20 px-10'>
            
            <form action={formAction}
            className="flex flex-col gap-6 w-full max-w-xl">
                    
                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" // assigns label with input id  
                    className="font-medium">Name</label>

                    <input id="name" name="name" type="text" placeholder="Your name" value={state.values.name}
                    className="border border-gray-300 rounded-sm px-3 py-2 outline-none focus:border-black"
                    />

                    {/* Error message, shows if exists */}
                    {state.errors?.name && (
                        <p className="text-sm text-red-600">
                            {state.errors.name[0]}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium">Email</label>

                    <input id="email" name="email" type="text" placeholder="you@mail.com" value={state.values.email}
                    className="border border-gray-300 rounded-sm px-3 py-2 outline-none focus:border-black"/>

                    {/* Error message, shows if exists */}
                    {state.errors?.email && (
                        <p className="text-sm text-red-600">
                            {state.errors.email[0]}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-medium">Message</label>

                    <textarea id="message" name="message" placeholder="Tell us about your needs..." 
                    rows={6} value={state.values.message}
                    className="border border-gray-300 rounded-sm px-3 py-2 outline-none focus:border-black"/>

                    {state.errors?.message && (
                        <p className="text-sm text-red-600">
                            {state.errors.message[0]}
                        </p>
                    )}
                </div>

                {/* Success message */}
                {state.message && (
                    <div className="flex gap-2 items-center bg-teal-600/10 text-sm text-emerald-700 p-4 
                    border-opacity-0 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <p>
                            {state.message}
                        </p>                        
                    </div>
                )}

                {/* Submit */}
                <button type="submit" 
                className="bg-black text-white px-6 py-3 rounded-sm font-medium 
                hover:bg-teal-950 transition duration-300 ease-in-out">
                    Send message
                </button>
            </form>

        </section>
  );
}



    // const [name, setName] = useState(""); 
    // const [email, setEmail] = useState(""); 
    // const [message, setMessage] = useState("");
    // const [errors, setErrors] = useState({ name: "", email: "", message: "", });

    // function handleSubmit (e: React.FormEvent<HTMLFormElement>) { // e is a FormEvent produced by a <form> element.
    //     e.preventDefault();
    //     // testing
    //     console.log({ name, email, message, });
    //     // set new error messages
    //     const newErrors = { 
    //         name: nameValid(name), 
    //         email: emailValid(email), 
    //         message: messageValid(message) 
    //     };
    //     setErrors(newErrors);
    //     if (newErrors.name || newErrors.email || newErrors.message) {
    //         return;
    //         // show error messages
    //     }
    // }

    // function nameValid(name: string): string {
    //     if (name.trim().length < 2) {
    //         return "Name must contain at least 2 characters"
    //     }
    //     return "";
    // }
    // function emailValid(email: string): string {
    //     if(!email.length) {
    //         return "Please enter your email"
    //     }
    //     return "";
    // }
    // function messageValid(message: string): string {
    //     if (message.trim().length < 10) {
    //         return "Message must contain at least 10 characters"
    //     }
    //     return "";
    // }

