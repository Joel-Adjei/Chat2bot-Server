// import axios from "./axios.js";
import axios from "axios";

export async function fetchFromAgent(messages, reasoning = false) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: process.env.MODEL,
        messages: messages,
        // reasoning: { enabled: reasoning },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.KEY}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw new Error("Error fetching from agent: " + error.message);
  }
}
