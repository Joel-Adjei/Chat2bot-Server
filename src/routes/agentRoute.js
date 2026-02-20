import { Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { sendChatValidation } from "../validations/validations.js";
import { fetchFromAgent } from "../libs/utils.js";

const router = Router();

router.post("/prompt", checkSchema(sendChatValidation), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const validationErrors = errors
      .array()
      .map((err) => ({ field: err.location, msg: err.msg }));
    return res.status(400).json({ errors: validationErrors });
  }

  const data = matchedData(req);
  try {
    const agentResponse = await fetchFromAgent(data.messages, data.reasoning);
    return res.json({ data: agentResponse });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
