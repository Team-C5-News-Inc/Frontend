// // import axios
// import axios from 'axios';

//create the instance
export const news = axios.create({
  baseURL: 'https://backend-platzi-news.herokuapp.com/api',
});

/**
 * @description return the route for make the call, also you can add other variable
 * @param {string} route
 */
export const callNewsApi = (route = 'news') => {
  return (variable = '') => `/${route}${variable}`
}

