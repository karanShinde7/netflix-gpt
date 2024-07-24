import OpenAI from "openai";
import { OPENAI_API_KEY } from "./apiConstants";

export const openAIConfig = new OpenAI({
  apiKey: OPENAI_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true, // Open AI don't allow to use API KEY from client side application as it is not safe but still we want to make a call we can add this
});
