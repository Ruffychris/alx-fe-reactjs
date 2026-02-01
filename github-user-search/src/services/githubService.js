import axios from "axios";

const BASE_URL = "https://api.github.com";

// Old single user fetch
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

// Advanced search for multiple users
export const searchUsers = async (username, location, minRepos, page = 1) => {
  // Build query
  let query = "";
  if (username) query += `${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: {
      q: query,
      page,
      per_page: 10,
    },
  });

  return response.data; // Note: response.data.items contains array of users
};
