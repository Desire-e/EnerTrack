"use server";

// library that defines which data is valid
import { z } from "zod";

// -------------------------
// Validation rules
// -------------------------
// name - string, min characters
// email - string, email format
// message - string, min characters

const validationRules = z.object({
    name: z.string().min(2, 'Name must contain at least 2 characters'),
    email: z.email('Please enter a valid email address'),
    message: z.string().min(10, 'Message must contain at least 10 characters'),
});


// -------------------------
// A type defined for state
// -------------------------

export type ContactFormState = {
    // propieties
    errors: {
        // error's optional propieties 
        name?: string[];
        email?: string[];
        message?: string[];
    };
    
    // for data persistence
    values: {
        name: string;
        email: string;
        message: string;
    };
    
    message: string;
    
    success: boolean;
};


// -------------------------
// Manage response sended after validation
// -------------------------

export async function sendContactMessage (
    // previous state
    _prevState: {
        errors: {
            name?: string[];
            email?: string[];
            message?: string[];
        };
        message: string;
        success: boolean;
    },
    // new data
    formData: FormData) {


    // Obtain form data values, parsed
    const values = {
        name: formData.get("name")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        message: formData.get("message")?.toString() ?? "",
    }
    
    // Validate form data
    // return object with success and data
    const validatedFields = validationRules.safeParse(values);

    // if invalid
    if (!validatedFields.success) {
        return {
            // formating errors with flattenError(validatedFields.error)
            errors: z.flattenError(validatedFields.error).fieldErrors,
            // old invalid values
            values,
            message: "",
            success: false,
        };
    }

    // if valid
    const { name, email, message } = validatedFields.data;

    console.log(name);
    console.log(email);
    console.log(message);

    return {
        errors: {},
        values: { 
            name:"", 
            email:"", 
            message:"" 
        },
        message: "Message sent successfully. We'll get back to you shortly.",
        success: true,
    };
}