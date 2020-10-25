// import react
import React, { useContext, useEffect, useState } from 'react';
// use params hooks
import { useParams } from 'react-router-dom'
// import context
import { Context } from '../../utils/Context/index.jsx';
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
    setNew$(news?.find(item => item?.title === name && item))
  }, [])

  return (
    <article className="post">
      <section className="post__content">
        <div className="post__content--headline">
          <h1>{new$?.title}</h1>
        </div>
        <img src={new$?.image} className="post__content--image"/>
        <div className="post__content--text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dui ultricies, tristique justo eu, ornare nisl. Phasellus accumsan vel justo eu volutpat. Mauris augue ipsum, accumsan non nisl ut, rutrum iaculis enim. Pellentesque risus est, mollis sed porttitor sed, efficitur quis enim. Etiam pulvinar lobortis lectus, nec dapibus ex cursus nec. Integer volutpat rutrum turpis ac viverra.
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dui ultricies, tristique justo eu, ornare nisl. Phasellus accumsan vel justo eu volutpat. Mauris augue ipsum, accumsan non nisl ut, rutrum iaculis enim. Pellentesque risus est, mollis sed porttitor sed, efficitur quis enim. Etiam pulvinar lobortis lectus, nec dapibus ex cursus nec. Integer volutpat rutrum turpis ac viverra.
          </p>
          <br/>
          <p>
            Sed eu tincidunt risus. Cras at lectus viverra, dictum erat nec, maximus ipsum. Aenean ante arcu, aliquam ut lacinia malesuada, pulvinar ac mi. Curabitur iaculis eu dolor nec consectetur. Aliquam semper volutpat diam, id faucibus leo aliquam id. Phasellus mattis in leo in bibendum. Ut aliquet velit purus, eu viverra eros aliquam sed. Vestibulum maximus turpis vel eros vestibulum, in pharetra dui vestibulum.
          </p>
        </div>
      </section>
    </article>
  )
};

export default Article;
