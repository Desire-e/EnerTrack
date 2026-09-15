"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import ReactMarkdown from "react-markdown"; // renders markdown

/**
* Floating chat widget.
* - Circular button, fixed in the bottom right corner.
* - Clicking it opens a dark panel with the conversation.
* - Uses the same useChat hook you already had in Chatbot.tsx.
*/

/** 
 * Resources:
 * https://ai-sdk.dev/docs/ai-sdk-ui/chatbot
*/

export default function Chatbot() {        

    /**
     * Chat behavior and connection
     */

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

    /**
     * State to open/close widget
     */
    const [open, setOpen] = useState(false);

    /**
     * Scroll behavior
     */
    // Ref to the bottom of messages container 
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    // Effect to scroll every time the messages list change 
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }, [messages]);


    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex flex-col items-end gap-3">
            {/* Chat panel, only visible if it's open */}
            { open && (
            <div className="flex h-[min(70vh,600px)] w-[min(90vw,380px)] flex-col overflow-hidden
            rounded-2xl border border-white/10 bg-black shadow-xl shadow-black/40">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-sm font-medium text-white">
                            EnerTrack Assistant
                        </span>
                    </div>
                    
                    {/* close button */}
                    <button className="rounded-full p-1 text-white/50 
                    transition hover:bg-white/10 hover:text-white"
                    aria-label="Close chat"
                    onClick={() => setOpen(false)}>
                        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Messages history - prints all the conversation */}
                <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 chat-scroll">
                    
                    {messages.length === 0 && (
                    <p className="text-sm text-white/40">Ask me anything you need about your energy consumption.</p>
                    )}

                    {/* Bubbles */}
                    {/* role - who wrote the message */}
                    {messages.map((message) => (
                    <div
                    key={message.id}
                    className={`flex 
                        ${message.role === "user" ? 
                        "justify-end" : 
                        "justify-start"
                    }`}>
                        <div
                        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                            message.role === "user" ? 
                            "bg-linear-to-br from-teal-500 to-emerald-600 text-white" : 
                            "bg-white/5 text-white/90"
                        }`}>

                            {/* An UIMessage isn't a simple entry: the text lives inside "parts", 
                            because a message can have several parts (text, results of tools, ...) */}
                            {message.parts.map((part, i) =>
                                part.type === "text" ? 
                                ( <ReactMarkdown key={i}>{part.text}</ReactMarkdown> ) : 
                                null
                            )}
                        </div>
                    </div>
                    ))}

    
                    {/* Dots while there's no response */}

                    {/* status can be:
                    ready (no request in progress, the user can type and send)
                    submitted (you just sent the message, waiting for the server to start responding)
                    streaming (the bot is responding in real time)
                    error (something went wrong) */}
                    {status === "submitted" && (
                    <div className="flex justify-start">
                        <div className="rounded-2xl bg-white/5 px-3 py-2">
                        <span className="flex gap-1">
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.3s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.15s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" />
                        </span>
                        </div>
                    </div>
                    )}
                    {/* Invisible node to auto-scroll */}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input to write new message */}
                <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 border-t border-white/10 p-3">
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Write a message..."
                    disabled={status !== "ready"}
                    className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm text-white placeholder-white/30 
                    outline-none ring-1 ring-white/10 focus:ring-teal-400 disabled:opacity-50"/>
                    
                    <button
                    type="submit"
                    disabled={status !== "ready" || !input.trim()}
                    aria-label="Send message"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full 
                    bg-gradient-to-br from-teal-500 to-emerald-600 text-white transition disabled:opacity-40">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </form>
                </div>
            )}

            {/* Floating button */}
            <button 
            onClick={() => setOpen(!open)} 
            aria-label={open ? "Close chat" : "Open chat"}
            className="flex h-14 w-14 items-center justify-center rounded-full p-3 bg-linear-to-br from-black to-teal-600 text-white shadow-xl shadow-teal-700/50 transition duration-300 ease-in-out hover:scale-103">
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
            </button>
        </div>
    );
}