import { Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { sendChatValidation } from "../validations/validations.js";

const router = Router();

router.post("/prompt", checkSchema(sendChatValidation), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const validationErrors = errors
      .array()
      .map((err) => ({ field: err.location, msg: err.msg }));
    return res.status(400).json({ errors: validationErrors });
  }

  const data = matchedData(req);

  return res.json({ message: data.prompt });
});

export default router;
