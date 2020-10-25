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
          <img src="https://programarivm.com/wp-content/uploads/2016/06/React.js_logo.png"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Stylus-logo.svg/1200px-Stylus-logo.svg.png"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNDAeFsmVZWZbm4bWVGBilgZq14TVEdoaMbA&usqp=CAU"/>
        </div>
        <span>Backend</span>
        <div className="about__content--techIcons">
          <img src="https://uploads.sitepoint.com/wp-content/uploads/2016/04/1461122387heroku-logo.jpg"/>
          <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F251fa4c7-0a6c-4066-aeb5-2d6196eb1a40%2FUntitled.png?table=block&id=83557917-8424-4615-acab-21ca8828eaa6&width=570&userId=&cache=v2"/>
          <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbc813221-3411-46db-afd7-83ee1681e76c%2FUntitled.png?table=block&id=96c99357-3e95-4085-8082-0d979fbeb793&width=1930&userId=&cache=v2"/>
        </div>
      </div>
    </section>
  </article>
);

export default About;
