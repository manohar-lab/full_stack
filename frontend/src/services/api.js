import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export async function getHealth() {
  const response = await axios.get(`${API_URL}/health`);
  return response.data;
}
