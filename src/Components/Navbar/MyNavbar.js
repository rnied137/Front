import React from "react";

import styled from 'styled-components';
import Burger  from "../../Components/Navbar/Burger";


const Nav = styled.nav`
width: 100%;
height: 55px;
border-bottom: 2px solid #f1f1f1;
padding: 0 20px;
display: flex;
justify-content: space-between;
background-color: black;



.logo {
padding: 15px 0;
color: white;
letter-spacing: 2px;
}


  
  li {
    padding: 18px 10px;
  }

li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}



`;


const MyNavbar = (props) => {
  return (
    <Nav>
    
        <div className="logo">
        Logo
        </div>             
       <Burger/>
      {props.children}
      </Nav>
  );
};

export default MyNavbar;
