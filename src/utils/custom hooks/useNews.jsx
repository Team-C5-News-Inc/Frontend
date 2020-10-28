// use react hooks
import { useEffect, useState } from 'react';
// import request tools
import { newsAPI, callNewsApi } from '../requests.js';

const useNews = () => {
  // use state to handle the state
  const [news, setNews] = useState({ data: [{ title: '', images: '' }] });

  useEffect((option = 0) => {
    // set implementation
    switch (option) {
      case 0: {
        const getInitialNews = callNewsApi('news')

        const fetchData = () => newsAPI.get(getInitialNews()).then(response => setNews(response?.data))

        fetchData()
      }
    }
  }, []);

  return { news };
};

export default useNews;
