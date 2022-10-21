import api from "./index";

export const searchRestaurants = ({ term }) =>
  api.get(`businesses/search`, {
    params: {
      limit: 50,
      term,
      location: "san jose",
    },
  });

export const restaurantDetails = (id) => api.get(`businesses/${id}`);
