import axios, { AxiosError } from "axios";
import { API_URL } from "@env";

const client = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface CustomError extends Error {
  userMessage: string;
};

class CustomError extends Error {
  userMessage: string;

  constructor(errorMessage: string, userMessage: string) {
    super(errorMessage);
    this.userMessage = userMessage;
  }
}

function handleApiError(error: AxiosError, functionName: string): never {
  const statusCode = error.response ? error.response.status : null;
  const { errorMessage, userMessage } = getStatusMessages(statusCode);

  console.error(`${functionName} - Status: ${statusCode} - Message: ${errorMessage}`);
  const customError: CustomError = new CustomError(errorMessage, userMessage);
  throw customError;
}

export { client, handleApiError }