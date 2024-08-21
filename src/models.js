const modelMap = {
  "gpt-3.5-turbo": "gemini-1.0-pro",
  "gpt-4": "gemini-1.5-pro",
  "gpt-4-turbo": "gemini-1.5-flash",
  "gpt-4o": "gemini-1.5-flash",
  "gpt-4o-mini": "gemini-1.5-pro",
};

const modelsList = [
  {
    created: 1677610602,
    object: "model",
    owned_by: "google",
    id: "gemini-1.5-pro",
  },
  {
    created: 1677610602,
    object: "model",
    owned_by: "google",
    id: "gemini-1.5-flash",
  },
  {
    created: 1677610602,
    object: "model",
    owned_by: "google",
    id: "gemini-1.0-pro",
  },
];

export { modelsList, modelMap };
