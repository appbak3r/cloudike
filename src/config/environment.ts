type Environment = {
  apiUrl: string;
};

export const environment: Environment = {
  apiUrl: process.env.REACT_APP_API_URL || ""
};
