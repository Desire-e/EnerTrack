"use server";

import { z } from "zod";

// Validation rules
const validationRules = z.object({
    name: z.string().min(2, 'Name must contain at least 2 characters'),
    email: z.email('Please enter a valid email address'),
    message: z.string().min(10, 'Message must contain at least 10 characters'),
});



export type ContactFormState = {
    errors: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    // data persistence
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
_prevState: {
    errors: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message: string;
    success: boolean;
},
formData: FormData) {

    const values = {
        name: formData.get("name")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        message: formData.get("message")?.toString() ?? "",
    }
    
    const validatedFields = validationRules.safeParse(values);

    // invalid
    if (!validatedFields.success) {
        return {
            errors: z.flattenError(validatedFields.error).fieldErrors,
            values,
            message: "",
            success: false,
        };
    }

    // valid
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