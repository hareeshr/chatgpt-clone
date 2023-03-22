import { Configuration, OpenAIApi } from "openai"

//chatgpt configuration
const  configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export default openai;