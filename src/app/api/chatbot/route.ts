/**
 * This file exports a POST function: 
 * 
 * - receives the user's message (req.json())
 * - calls streamText() ('ai' library) - obtains Groq model and user messages, returns streaming response
 * - converts the result of streamText() into an HTTP response
 */
/**
 * Resources:
 * 
 * https://v4.ai-sdk.dev/cookbook/guides/gpt-4-5#getting-started-with-the-ai-sdk - AI SDK 
 * https://ai-sdk.dev/providers/ai-sdk-providers/groq - AI SDK providers
 * https://console.groq.com/docs/ai-sdk - Groq
 * https://nextjs.org/docs/app/api-reference/file-conventions/route - route.js files
 */


// Provider Instance:
// the object that represents a specific Groq model, already configured with an API key, 
// passed to functions (streamText, generateText, ...) in the "model" parameter.
import { groq } from "@ai-sdk/groq";

import { 
    type UIMessage,
    convertToModelMessages, // Converts the message to "model message"
    streamText, // Generates response via streaming 
    createUIMessageStreamResponse,
    toUIMessageStream,
} from "ai";


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;


export async function POST(req: Request) { // Obtains request from browser - user's message

    // ----------------------------------
    // Obtain messages
    // ----------------------------------
    // req.json() parse JSON to JavaScript object.
    // That JavaScript object is saved in body, an object with a 
    // prop "messages" with value type UIMessage[]. 
    const body: { messages: UIMessage[] } = await req.json();
    // Extracts from body object the value in "messages" prop (UIMessages)
    const messages = body.messages;

    // Returns a Promise<ModelMessage[]>
    // Finally, obtains ModelMessage[]
    const modelMessages = await convertToModelMessages(messages);


    // ----------------------------------
    // Sends message to Groq model (type ModelMessage[])
    // Then obtains streaming responses
    // ----------------------------------
    const result = streamText({
        // selects Groq's model
        // capabilities: Object Generation, Tool Usage, Tool Streaming; not image input
        model: groq("openai/gpt-oss-120b"), 
        messages: modelMessages,
    });
    // Returns an object that represents the result of the 
    // streaming generation, a generation that is still being produced.


    // ----------------------------------
    // Obtains an object with stream propiety, with 
    // a value type ReadableStream<TextStreamPart<ToolSet>>
    // ----------------------------------

    // TODO. toolset
    // const tools = {
    //     getEnergyConsumption: ...,
    // };

    const stream = toUIMessageStream({
        stream: result.stream,   
        // tools?: ToolSet;
        // TODO. Tools to give to the model, so it can use them
        // e.g: getEnergyConsumption()
    });
    // Returns an stream of chunks with the readeble format 
    // for the AI SDK's UI (ReadableStream<UIMessageChunk>)


    // ----------------------------------
    // This parse the response to the browser.
    // ReadableStream<UIMessageChunk> to
    // Response (HTTP response) 
    // ----------------------------------

    // return result.toUIMessageStreamResponse(); -- deprecated (see node_modules\ai\dist\index.d.ts)
    return createUIMessageStreamResponse({stream});

}