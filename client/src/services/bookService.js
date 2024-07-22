import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

export const fetchAllBooks = async () => {
  try {
    const res = await axios.get("/books");
    const data = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

export const addBook = async (data) => {
  try {
    const res = await axios.post("/books",data,{headers:{
      "Content-Type":"applicaton/json"
    }});
    const data = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};
