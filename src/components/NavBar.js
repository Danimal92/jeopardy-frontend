import React from 'react';
import { NavLink } from 'react-router-dom';
import {Redirect} from 'react-router-dom';


const NavBar = (props) => {

    const handleLogout = () => {
        window.location.reload()
        
        
    }

    

  return (
    <div>
      <NavLink to="/" exact>Home</NavLink>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={props.handleDeleteUser}>DELETE MYSELF AHHHHHHH</button>
    </div>
  );
};
export default NavBar;
