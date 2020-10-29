// use react hooks
import { useEffect, useState } from 'react';
// import request tools
import { newsAPI, callNewsApi } from '../requests.js';

const useNews = () => {
  // use state to handle the state
  const [news, setNews] = useState({
    data: [{ title: '', images: '' }],
    loading: true,
  });

  useEffect((option = 0) => {
    // set implementation
    switch (option) {
      case 0: {
        const getInitialNews = callNewsApi('news');

        const fetchData = () =>
          newsAPI
            .get(getInitialNews('?page=10'))
            .then((response) =>
              setNews({
                data: response?.data.data,
                info: response?.data.info,
                loading: false,
              }),
            );

        fetchData();
      }
    }
  }, []);

  return { news };
};

export default useNews;
