// import react
import React, { useEffect, useState } from 'react';
// import Article Structure
import ArticleStructure from './ArticleStructure/index.jsx';
// import ArticleSkeleton
import ArticleSkeleton from './ArticleSkeleton/index.jsx'
// import styles
import './styles.styl';

// create and export Home page
const Article = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = () => setTimeout(() => {
      setLoading(false);
    }, 2000);

    timer()

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return loading ? <ArticleSkeleton/> : <ArticleStructure/>;
};

export default Article;
