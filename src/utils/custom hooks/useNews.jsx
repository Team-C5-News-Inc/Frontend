// use react hooks
import { useEffect, useState } from 'react';
// import request tools
import { newsAPI, callNewsApi, uri } from '../requests.js';

const useNews = () => {
  // use state to handle the state
  const [news, setNews] = useState({
    data: [
      { title: '', images: '' },
      { title: '', images: '' },
      { title: '', images: '' },
      { title: '', images: '' },
      { title: '', images: '' },
      { title: '', images: '' },
    ],
    loading: true,
  });
  console.log(news);
  // use state to handle the state
  const [action, setAction] = useState({
    option: 0,
    action: 'america',
    next: 1,
  });

  useEffect(() => {
    // set implementation
    switch (action.option) {
      case 0:
        {
          const getInitialNews = callNewsApi('news');

          const fetchData = () =>
            newsAPI.get(getInitialNews()).then((response) =>
              setNews({
                data: response?.data.data,
                info: response?.data.info,
                loading: false,
              }),
            );

          fetchData();
        }
        break;
      case 1:
        {
          const getInitialNews = callNewsApi('news');

          const fetchData = () =>
            newsAPI
              .get(getInitialNews(`?tags=${action.action}`))
              .then((response) =>
                setNews({
                  data: response?.data.data,
                  info: response?.data.info,
                  loading: false,
                }),
              );

          fetchData();
        }
        break;
      case 2:
        {
          const getInitialNews = callNewsApi('news');

          const fetchData = () =>
            newsAPI
              .get(getInitialNews(`?category=${action.action}`))
              .then((response) =>
                setNews({
                  data: response?.data.data,
                  info: response?.data.info,
                  loading: false,
                }),
              );

          fetchData();
        }
        break;
      case 3:
        {
          const query = `
            query {
              searchNews(keyword: ${action && `"${action.action}"`}){
                title
                images
            }
            }
          `;
          const opts = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
          };
          fetch(uri, opts)
            .then((res) => res.json())
            .then((response) =>
              setNews({
                data: response?.data?.searchNews,
                loading: false,
              }),
            )
            .catch(console.error);
        }
        break;
      case 4:
        {
          const getInitialNews = callNewsApi(`news?page=${action.action}`);

          const fetchData = () =>
            newsAPI.get(getInitialNews()).then((response) =>
              setNews({
                data: [...news.data, ...response?.data.data],
                info: response?.data.info,
                loading: false,
              }),
            );

          fetchData();
        }
        break;
    }
  }, [action]);
  return { news, setAction };
};

export default useNews;
