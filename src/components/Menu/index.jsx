// import react
import React, { useState } from 'react';
// import styles
import './styles.styl'

// create and export Home page
const Menu = () => {
  // use state
  const [showMenu, setShowMenu] = useState(true);

  console.log(showMenu)

  return (
    <>
      <i onClick={() => setShowMenu(!showMenu)} className="fa fa-angle-down fa-4x" />
      {showMenu && (
        <div className="menu">Hey there</div>
      )}
    </>
  )
}

export default Menu;
