import React from "react";

import styled from "styled-components";

import { NavLink } from "react-router-dom";


const UI = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  width:60vw;
  

  li {
    padding: 20px 10px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ff6584;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in;

    li:hover {
      background-color: #6C63FF;
      color: white;
      text-decoration: none;
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
