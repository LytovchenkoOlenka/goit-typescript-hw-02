import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "BrKIHIjmCyNVpGRY_nLUESnY8fZ9P8mGYCLwC6-Y-6s",
      query: searchQuery,
      per_page: 12,
      page: currentPage,
    },
  });
  return response.data.results;
};
