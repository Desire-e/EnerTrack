/**
 * Official documentation:
 * 
 * AI SDK
 * https://v4.ai-sdk.dev/cookbook/guides/gpt-4-5#getting-started-with-the-ai-sdk 
 * https://ai-sdk.dev/providers/ai-sdk-providers/groq
 * 
 * Groq
 * https://console.groq.com/docs/ai-sdk 
 * 
 * route.js files
 * https://nextjs.org/docs/app/api-reference/file-conventions/route 
 */


import { groq } from "@ai-sdk/groq";
import { type UIMessage, convertToModelMessages, streamText, createUIMessageStreamResponse, toUIMessageStream } from "ai";
import { chatbotSystemPrompt } from "@/app/_utils/chatbot"


export async function POST(req: Request) { 
    // Obtain messages
    const body: { messages: UIMessage[] } = await req.json();
    const messages = body.messages;
    const modelMessages = await convertToModelMessages(messages);

    // Send message to model 
    // Return streaming responses
    const result = streamText({
        model: groq("openai/gpt-oss-120b"), 
        messages: modelMessages,
        instructions: chatbotSystemPrompt,
    });

    // Returns an stream of chunks in readeble format for AI SDK's UI
    const stream = toUIMessageStream({
        stream: result.stream,   
    });

    // Parse the response to the browser (HTTP response)
    return createUIMessageStreamResponse({stream});

}