// import react
import React from 'react';
// import styles
import './styles.styl';

// create and export
const About = () => (
  <article className="container">
    <section className="content">
      <div className="content__headline">
        <h1>About</h1>
      </div>
      <div className="content__text">
        <p>
        Somos un equipo que desarrollamos una herramienta pensando en ti, News INC es un periódico en línea que publica noticias a gran escala todos los días te permite ver de manera rapida y fluida las noticas mas importantes del mundo al instante.
        </p>
        <br/>
        <p>
        No tienes que precuparte por visitar los portales de noticias, News INC trabaja para ti y agrupa las noticias mas importantes para ti , ademas puedes
        buscar por categorias y etiquetas. Por ultimo tiene su propio sistema de comentarios y asi interactuar con todos los visitantes del portal.
        </p><br />

        <div className="content__text-tecnologic">
          <h2> Tecnologias</h2>
          <span>Frontend</span>
          <div className="tech__icons">
            <img src="https://programarivm.com/wp-content/uploads/2016/06/React.js_logo.png"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Stylus-logo.svg/1200px-Stylus-logo.svg.png"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNDAeFsmVZWZbm4bWVGBilgZq14TVEdoaMbA&usqp=CAU"/>
            <img src="https://lh3.googleusercontent.com/proxy/QJ4kq858JSCGCjdPQK9qgEIWpCDk0lzZPz7F79br2bc5X43Owg3WtA0s7CIFKWQ5VmmcXvDUUrZeQDaypvPBhOZk7zFx-rTLU4LtA0V4S26QDEMHsljNpA"/>

          </div>
          <span>Backend</span>
          <div className="tech__icons">
            <img src="https://uploads.sitepoint.com/wp-content/uploads/2016/04/1461122387heroku-logo.jpg"/>
            <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F251fa4c7-0a6c-4066-aeb5-2d6196eb1a40%2FUntitled.png?table=block&id=83557917-8424-4615-acab-21ca8828eaa6&width=570&userId=&cache=v2"/>
            <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbc813221-3411-46db-afd7-83ee1681e76c%2FUntitled.png?table=block&id=96c99357-3e95-4085-8082-0d979fbeb793&width=1930&userId=&cache=v2"/>

          </div>
        </div>

      </div>

    </section>
  </article>
);

export default About;