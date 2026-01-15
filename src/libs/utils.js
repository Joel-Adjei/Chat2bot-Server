import axios from "./axios.js";

export async function fetchFromAgent(messages, reasoning = false) {
  try {
    const response = await axios.post("", {
      model: process.env.MODEL,
      messages: messages,
      reasoning: { enabled: reasoning },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error fetching from agent: " + error.message);
  }
}
