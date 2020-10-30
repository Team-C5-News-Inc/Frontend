// use react hooks
import { useEffect, useState } from 'react';
// import request tools
import { newsAPI, callNewsApi } from '../requests.js';

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
  // use state to handle the state
  const [action, setAction] = useState({ option: 0, action: 'mexico' });

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
      case 1: {
        const getInitialNews = callNewsApi('news');

        const fetchData = () =>
          newsAPI.get(getInitialNews(`?tags=${action.action}`)).then((response) =>
            setNews({
              data: response?.data.data,
              info: response?.data.info,
              loading: false,
            }),
          );

        fetchData();
      }
    }
  }, [action]);
  return { news, setAction };
};

export default useNews;
