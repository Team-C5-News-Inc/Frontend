// import axios
import axios from 'axios';

// create the instance
export const newsAPI = axios.create({
  baseURL: 'https://backend-platzi-news.herokuapp.com/api',
});

// uri to make the call to graphql
export const uri = 'https://backend-platzi-news.herokuapp.com/search';

/**
 * @description return the route for make the call, also you can add other variable
 * @param {string} route
 */
export const callNewsApi = (route = 'news') => {
  return (variable = '') => `/${route}${variable}`;
};
