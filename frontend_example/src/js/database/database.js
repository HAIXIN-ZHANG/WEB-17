import axios from "axios";
import { getPath } from "@/js/database/utils.js";

const fetchData = async (endpoint) => {
  try {
    const data = await axios.get(endpoint);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDatabase = async () => {
  const [cards, profile, highline, message, request] = await Promise.all([
    (async () => (await fetchData(getPath("cards"))).data)(),
    (async () => (await fetchData(getPath("profile"))).data)(),
    (async () => (await fetchData(getPath("highline"))).data)(),
    (async () => (await fetchData(getPath("message"))).data)(),
    (async () => (await fetchData(getPath("request"))).data)(),
  ]);

  return { cards, profile, highline, message, request };
};
