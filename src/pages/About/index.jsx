// import react
import React from 'react';
// import styles
import './styles.styl';

// create and export
const About = () => (
  <article className="about">
    <section className="about__content">
      <div className="about__content--headline">
        <h1>About</h1>
      </div>
      <div className="about__content--text">
        <p>
          We are a team that developed a tool thinking of you, News INC is an online newspaper that publishes news on a large scale every day that allows you to see the most important news in the world instantly and quickly.
        </p>
        <br/>
        <p>
          You do not have to worry about visiting the news portals, News INC works for you and groups the most important news for you, you can also
          search by categories and tags. Finally, it has its own comment system and thus interact with all visitors to the portal.
        </p>
        <br/>
      </div>
      <div className="about__content--tech">
        <h2> Technologies</h2>
        <span>Frontend</span>
        <div className="about__content--techIcons">
          <img src="https://programarivm.com/wp-content/uploads/2016/06/React.js_logo.png" alt="ReactJS"/>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--SINhWgFo--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/8r0ymglytx7xi3uzme48.png" alt="React Router"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Stylus-logo.svg/1200px-Stylus-logo.svg.png" alt="Stylus"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNDAeFsmVZWZbm4bWVGBilgZq14TVEdoaMbA&amp;usqp=CAU" alt="Webpack" />
          <img src="https://www.returngis.net/wp-content/uploads/2019/08/babel-logo.jpg" alt="Babel"/>
          <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/1100883/images/6804734/airbnb-seeklogo-pdf__1_.png" alt="Enzime"/>
          <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/full/jestlogo.png" alt="Jest"/>
          <img src="data:image/png;base64,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" alt=""/>
          <img src="https://www.typesettercms.com/data/_addondata/x_Addons/screenshots/0/340/disqus-social-icon-white-blue.png" alt="Disqus"/>

        </div>
        <span>Backend</span>
        <div className="about__content--techIcons">
          <img src="https://uploads.sitepoint.com/wp-content/uploads/2016/04/1461122387heroku-logo.jpg" alt="Heroku"/>
          <img src="https://img.icons8.com/color/452/firebase.png" alt="Firebase"/>
          <img src="https://graphql.org/img/logo.svg" alt="graphql"/>
          <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F251fa4c7-0a6c-4066-aeb5-2d6196eb1a40%2FUntitled.png?table=block&amp;id=83557917-8424-4615-acab-21ca8828eaa6&amp;width=570&amp;userId=&amp;cache=v2" alt="Node JS"/>
          <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbc813221-3411-46db-afd7-83ee1681e76c%2FUntitled.png?table=block&amp;id=96c99357-3e95-4085-8082-0d979fbeb793&amp;width=1930&amp;userId=&amp;cache=v2" alt="Mongo DB"/>
          <img src="https://www.juanonlab.com/blog/sites/default/files/2019-05/VistaTravis.png" alt="Travis CI"/>
          </div>
        <span>Data Science</span>
        <div className="about__content--techIcons">
          <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="python" />
          <img src="https://lxml.de/python-xml-title.png" alt="pyymaml"/>
          <img src="https://pypi.org/static/images/logo-small.6eef541e.svg" alt="pypi"/>
          <img src="data:image/png;base64,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" alt="pandas"/>
          <img src="https://urllib3.readthedocs.io/en/latest/_static/banner.svg" alt="urllib3" />
        </div>
      </div>
    </section>
  </article>
);

export default About;
