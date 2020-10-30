// import react
import React, { useContext } from 'react';
// import react
import { Link } from 'react-router-dom';
// import context
import { Context } from '../../utils/Context/index.jsx';
//import styles
import './styles.styl';

const Tags = ({ text }) => {
  // use context
  const { setAction } = useContext(Context);

  return (
    <Link to="/" onClick={() => setAction({ option: 1, action: text })}>
      <div className="tag" aria-label="tag">
        {text}
      </div>
    </Link>
  );
};

export default Tags;
