// import react
import React, { useEffect, useContext } from 'react';
// import Article Structure
import ArticleStructure from './ArticleStructure/index.jsx';
// import ArticleSkeleton
import ArticleSkeleton from './ArticleSkeleton/index.jsx';
// import context
import { Context } from '../../utils/Context/index.jsx';
// import styles
import './styles.styl';

// create and export Home page
const Article = () => {
  const { news } = useContext(Context);

  useEffect(() => {
    return () => {
      news.loading = true;
    };
  }, []);

  return news?.loading || onlyTest ? <ArticleSkeleton /> : <ArticleStructure />;
};

export default Article;
