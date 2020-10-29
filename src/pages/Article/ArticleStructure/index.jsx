// import react
import React, { useContext, useEffect, useState } from 'react';
// use params hooks
import { useParams } from 'react-router-dom'
// import context
import { Context } from '../../../utils/Context/index.jsx';
// import disqus
import { DiscussionEmbed } from 'disqus-react';

const ArticleStructure = () => {
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
        <img src={`http://${new$?.images[0]}` || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80CdYg35qC4hY8ByncPpj_6MQ&usqp=CAU '} className="post__content--image"/>
        <div className="post__content--text">
          {new$?.body?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </div>
      </section>
      <DiscussionEmbed
        shortname="news-inc"
        config={
          {
            url: `http://localhost:3000/#/article/${new$?.author}`,
            identifier: new$?._id,
            title: new$?.title,
            language: 'en'
          }
        }
      />
    </article>
  )
};

export default ArticleStructure;
