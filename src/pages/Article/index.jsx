// import react
import React, { useContext, useEffect, useState } from 'react';
// use params hooks
import { useParams } from 'react-router-dom'
// import context
import { Context } from '../../utils/Context/index.jsx';
// import disqus
import { DiscussionEmbed } from 'disqus-react';
// import styles
import './styles.styl';

// create and export Home page
const Article = () => {
  // use state
  const [new$, setNew$] = useState()
  // use context
  const { news } = useContext(Context)
  // use ref hooks
  const { name } = useParams()
  // use effect
  useEffect(() => {
    setNew$(news?.data?.find(item => item?.author === name && item))
  }, [])

  return (
    <article className="post">
      <section className="post__content">
        <div className="post__content--headline">
          <h1>{new$?.title}</h1>
        </div>
        <img src={new$?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3OACZKecLGqNCdYg35qC4hY8ByncPpj_6MQ&usqp=CAU '} className="post__content--image"/>
        <div className="post__content--text">
          {new$?.body?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </div>
      </section>
      <DiscussionEmbed
        shortname="article"
        config={
          {
            url: '',
            identifier: '',
            title: '',
            language: 'en' //e.g. for Traditional Chinese (Taiwan)
          }
        }
      />
    </article>
  )
};

export default Article;
