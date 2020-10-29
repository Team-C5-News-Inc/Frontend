// import react
import React, { useContext, useEffect, useState } from 'react';
// use params hooks
import { useParams } from 'react-router-dom';
// import context
import { Context } from '../../../utils/Context/index.jsx';
// import disqus
import { DiscussionEmbed } from 'disqus-react';

const ArticleStructure = () => {
  // use state
  const [new$, setNew$] = useState();
  // use context
  const { news } = useContext(Context);
  // use ref hooks
  const { name } = useParams();
  // use effect
  useEffect(() => {
    setNew$(news?.data?.find((item) => item?._id === name && item));
  }, []);
  // disqus config
  let config = {
    url: `http://localhost:3000/#/article/${new$?.author}`,
    identifier: new$?._id,
    title: new$?.title,
    language: 'en',
  };

  return (
    <article className="post">
      <section className="post__content">
        <div className="post__content--headline">
          <h1>{new$?.title}</h1>
        </div>
        <img
          src={`${
            /^https?:\/\/|^http?:\/\//.test(new$?.images[0]) ?
              new$?.images[0] :
              `${/^www?:\/\//.test(new$?.images[0])}` &&
							`http://${new$?.images[0]}`
          }`}
          className="post__content--image"
        />
        <div className="post__content--text">
          {new$?.body?.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>
      <DiscussionEmbed shortname="news-inc" config={config} />
    </article>
  );
};

export default ArticleStructure;
