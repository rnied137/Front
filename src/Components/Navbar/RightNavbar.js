import React from "react";

import styled from "styled-components";

import { NavLink } from "react-router-dom";

const UI = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {

    flex-flow: column nowrap ;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-ease-out;

    li a{
   
        color: white;
        text-decoration: none
      
    }
  }
`;

export const RightNavbar = (props) => {
  return (
    <UI open={props.open}>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>

      <li>
        <NavLink to="/shoppingCart">ShoppingCart</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/">Users</NavLink>
      </li>

      <li>
        <NavLink to="/">Users</NavLink>
      </li>
      {props.children}
    </UI>
  );
};
