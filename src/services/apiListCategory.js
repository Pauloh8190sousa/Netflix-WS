const axios = require("axios");

export default apiListCategory = axios.default.create({
  baseURL: process.env.REACT_APP_LIST_API_URL,
});
