import axios from "axios";

export default axios.create({
  baseURL: process.env.AGENT_BASEURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.KEY}`,
  },
});
