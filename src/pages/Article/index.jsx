// import react
import React, { useEffect, useState } from 'react';
// import Article Structure
import ArticleStructure from './ArticleStructure/index.jsx';
// import Article Skeleton
import ArticleSkeleton from './ArticleSkeleton/index.jsx';
// import styles
import './styles.styl';

// create and export Home page
const Article = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return loading ? <ArticleSkeleton/> : <ArticleStructure/>;
};

export default Article;
