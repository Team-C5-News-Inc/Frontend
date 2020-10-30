// import axios
import axios from 'axios';
// import apollo clients
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
// import cross fetch
import fetch from 'cross-fetch';

// create the instance
export const newsAPI = axios.create({
  baseURL: 'https://backend-platzi-news.herokuapp.com/api',
});

// Initialize Apollo Client
export const client = new ApolloClient({
  link: createHttpLink({ uri: 'https://backend-platzi-news.herokuapp.com/search?', fetch: fetch }),
  cache: new InMemoryCache()
});

/**
 * @description return the route for make the call, also you can add other variable
 * @param {string} route
 */
export const callNewsApi = (route = 'news') => {
  return (variable = '') => `/${route}${variable}`;
};
