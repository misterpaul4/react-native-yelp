import axios from "axios";

const API_KEY =
  "oYMntkUi0lHVN54mAbb2KShmula1zykxCmiG9bTgiX0yqo7iedwPa1V4o0fAtvTYrKMvraBH2xKhud5EVJ0f06PZ8Z5QMLUUlixwtFBoEo6Nt2xwm3qISlwoc1NRY3Yx";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/`,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
