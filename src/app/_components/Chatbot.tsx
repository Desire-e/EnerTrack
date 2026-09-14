"use client";
 
import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import ReactMarkdown from "react-markdown"; // renders markdown

/** 
 * Resources:
 * https://ai-sdk.dev/docs/ai-sdk-ui/chatbot
*/
 
export default function Chatbot() {
    // useChat() points "/api/chat" by default, you could omit it, if it's the case
    // const { messages, sendMessage, status } = useChat();
    const { messages, sendMessage, status } = useChat({
        transport: 
            new DefaultChatTransport({ // conects component with the route handler (route.ts) 
                api: "/api/chatbot",
            }),
    });


    // Since AI SDK 5+, useChat doesn't manage the input
    // The text's state that is writting will be your responsability
    const [input, setInput] = useState("");

    
    // <HTMLFormElement> specify the element that triggered the event 
    // is specifically a <form> (gives more accurate autocomplete)
    function handleSubmit (e: React.SubmitEvent<HTMLFormElement>) {
        
        e.preventDefault();
        
        // If input is empty, doesn't submit
        if (!input.trim()) return;

        // sendMessage() adds the input to "messages" in an object
        // and sends the POST request to the route handler (route.ts)
        sendMessage({ text: input });
        
        // Reset input's state
        setInput("");
    }

 
  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>

        {/* Old messages history - prints all the conversation */}
        <div style={{ minHeight: 300, border: "1px solid #ccc", padding: 12 }}>
            
            {messages.map((message) => (
                <div key={message.id}>
                    {/* Role, who wrote the message */}
                    <strong>{message.role === "user" ? "You" : "Bot"}:</strong>{" "}

                    {/* An UIMessage isn't a simple entry: the text lives inside "parts", 
                    because a message can have several parts (text, results of tools, ...) */}
                    {message.parts.map((part, i) =>
                        part.type === "text" ? 
                        <ReactMarkdown key={i}>{part.text}</ReactMarkdown> : 
                        null
                    )}
                </div>
            ))}

            {/* status can be:
                ready (no request in progress, the user can type and send)
                submitted (you just sent the message, waiting for the server to start responding)
                streaming (the bot is responding in real time)
                error (something went wrong) */}

            {/* While is writting a response */}
            {status === "streaming" && <p><em>Escribiendo...</em></p>}
        </div>

    
        {/* Input to write new message */}
        <form onSubmit={handleSubmit}>

            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a message..."
            disabled={status !== "ready"}
            style={{ width: "80%" }} 
            />

            <button type="submit">Send</button>
        </form>

    </div>
  );
}












