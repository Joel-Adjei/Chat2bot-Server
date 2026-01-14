export const sendChatValidation = {
  prompt: {
    notEmpty: {
      errorMessage: "Input the prompt",
    },
  },
  reason: {
    notEmpty: {
      errorMessage: "reason should not be null",
    },
  },
};
