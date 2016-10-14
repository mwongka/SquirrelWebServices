import React from 'react';

const NavBarPresentationalLoggedOut = (props) => {
  return (
    <div>
      <nav>
         <div className="nav-wrapper white">
            <img className="navbar-logo" src="styles/img/flying-squirrel-orange-outline.png"/>
            <a href="#" className="brand-logo">Squirrel.io</a>

            <ul id="nav-mobile" className="right navbarLand">
             <li><a className='navbar_a_hover' style={{color: 'grey'}} href="#/signup">SignUp</a></li>
             <li><a className='navbar_a_btn' href="http://www.filedropper.com/squirrel"><button className="downloadBtn">DOWNLOAD APP</button></a></li>
           </ul>
         </div>
       </nav>
    </div>
    );
};

export default NavBarPresentationalLoggedOut;
