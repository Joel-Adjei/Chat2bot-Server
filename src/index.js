import express from "express";
import router from "./routes/routes.js";

const app = express();

app.use(express.json());
const PORT = 3100;

app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "Server up" });
});

app.listen(PORT, () => console.log("http://localhost:" + 3100));
