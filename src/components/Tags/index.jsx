// import react
import React from 'react';
//import styles
import './styles.styl'

const Tags = ({ text, url }) => {
  return (
    <a href="{url}">
      <div className="tag" aria-label="tag" >
        {text}
      </div>
    </a>
  )
}

export default Tags;
