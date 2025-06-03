const e=[{category:"",path:"/docs/quickstart",title:"Developer quickstart",description:`Developer quickstart
Take your first steps with the OpenAI API.
Take your first steps with the OpenAI API.
Take your first steps with the OpenAI API.
The OpenAI API provides a simple interface to state-of-the-art AI models for text generation, natural language processing, computer vision, and more. This example generates text output from a prompt, as you might using ChatGPT.
The OpenAI API provides a simple interface to state-of-the-art AI 
[models](/docs/models)
models
 for text generation, natural language processing, computer vision, and more. This example generates 
[text output](/docs/guides/text)
text output
 from a prompt, as you might using 
[ChatGPT](https://chatgpt.com)
ChatGPT
.
Generate text from a model
Generate text from a model
import OpenAI from "openai";
const client = new OpenAI();

const completion = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
        {
            role: "user",
            content: "Write a one-sentence bedtime story about a unicorn.",
        },
    ],
});

console.log(completion.choices[0].message.content);`,content:`Developer quickstart
Take your first steps with the OpenAI API.
Take your first steps with the OpenAI API.
Take your first steps with the OpenAI API.
The OpenAI API provides a simple interface to state-of-the-art AI models for text generation, natural language processing, computer vision, and more. This example generates text output from a prompt, as you might using ChatGPT.
The OpenAI API provides a simple interface to state-of-the-art AI 
[models](/docs/models)
models
 for text generation, natural language processing, computer vision, and more. This example generates 
[text output](/docs/guides/text)
text output
 from a prompt, as you might using 
[ChatGPT](https://chatgpt.com)
ChatGPT
.
Generate text from a model
Generate text from a model
import OpenAI from "openai";
const client = new OpenAI();

const completion = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
        {
            role: "user",
            content: "Write a one-sentence bedtime story about a unicorn.",
        },
    ],
});

console.log(completion.choices[0].message.content);`},{category:"",path:"/docs/api-reference/introduction",title:"Introduction",description:`Introduction
This API reference describes the RESTful, streaming, and realtime APIs you can use to interact with the OpenAI platform.
REST APIs are usable via HTTP in any environment that supports HTTP requests. Language-specific SDKs are listed on the libraries page.
This API reference describes the RESTful, streaming, and realtime APIs you can use to interact with the OpenAI platform.
REST APIs are usable via HTTP in any environment that supports HTTP requests. Language-specific SDKs are listed on the libraries page.`,content:`Introduction
This API reference describes the RESTful, streaming, and realtime APIs you can use to interact with the OpenAI platform.
REST APIs are usable via HTTP in any environment that supports HTTP requests. Language-specific SDKs are listed on the libraries page.
This API reference describes the RESTful, streaming, and realtime APIs you can use to interact with the OpenAI platform.
REST APIs are usable via HTTP in any environment that supports HTTP requests. Language-specific SDKs are listed on the libraries page.`}],t=null,n=["How to install xyd?","How to generate API Docs?","How to built-in components?"],o={docs:e,cloudConfig:t,suggestions:n};export{o as default};
