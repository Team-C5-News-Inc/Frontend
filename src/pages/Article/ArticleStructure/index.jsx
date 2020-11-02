// import react
import React, { useContext, useEffect, useState } from 'react';
// use params hooks
import { useParams } from 'react-router-dom';
// import context
import { Context } from '../../../utils/Context/index.jsx';
// import disqus
import { DiscussionEmbed } from 'disqus-react';
//import tag component
import Tags from '../../../components/Tags/index.jsx';

const ArticleStructure = () => {
  // use state
  const [new$, setNew$] = useState();
  // use context
  const { news } = useContext(Context);
  // use ref hooks
  const { name } = useParams();
  // use effect
  useEffect(() => {
    window.scrollTo(0, 0)
    setNew$(news?.data?.find((item) => item?._id === name && item));

  }, []);

  const config = {
    url: `https://news-inc.web.app/article/${new$?._id}`,
    identifier: new$?.title_id,
    title: new$?.title,
    language: 'en'
  }

  const Newsrc = (!new$?.images[0]) ? 'https://blog.davidrojo.es/wp-content/uploads/2011/04/file-not-found.jpg' : new$?.images[0];
  return (
    <article className="post">
      <section className="post__content">
        <div className="post__content--headline">
          <h1>{new$?.title}</h1>
        </div>
        <img
          src={`${
            /^https?:\/\/|^http?:\/\//.test(Newsrc) ?
              Newsrc :
              `${/^www?:\/\//.test(Newsrc)}` &&
						`https://${Newsrc}`
          }`}
          className="post__content--image"
        />
        <div className="post__content--text">
          {new$?.body?.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="post__content--quote">
          <a href={new$?.news_url}>
            <h3>Ir al post original</h3>
          </a>
        </div>
        <div className="post__content--tags">
          <h4 className="post__content--tagsTitle">Tags:</h4>
          <div className="post__content--tagsContainer">
            {new$?.tags?.map((element, i) => (
              <Tags key={i} text={element} />
            ))}
          </div>
        </div>
      </section>
      <section className="post__comments">
        <DiscussionEmbed
          shortname="news-inc"
          config={config}
        />
      </section>
    </article>
  );
};

export default ArticleStructure;
