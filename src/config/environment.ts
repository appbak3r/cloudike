type Environment = {
  apiUrl: string;
  localStorageKey: string;
};

export const environment: Environment = {
  apiUrl: process.env.REACT_APP_API_URL || "",
  localStorageKey: "cloudike"
};
