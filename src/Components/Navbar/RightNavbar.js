import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { FaGithubAlt as GithubIcon } from "react-icons/fa";
import { FaTwitterSquare as TwitterIcon } from "react-icons/fa";
import { FaShoppingCart as ShoppingCartIcon } from "react-icons/fa";
import { FaUser as UserIcon } from "react-icons/fa";
import { FaComment as ChatIcon } from "react-icons/fa";
import { FaClipboardCheck as DotsIcon } from "react-icons/fa";

const UI = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  width: 80%;

  li {
    padding: 25px 10px;
    font-size: 20px;
    border-radius: 10px;

    a {
      padding: 15px 10px;
    }

    a:hover {
      padding: 15px 10px;
    }
  }

  li:hover {
    color: white;
    text-decoration: none;
    border-bottom: 1px solid white;
    border-radius: 0px;
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
	align-items: center;
	z-index: 3;

	p {
	}



    li:hover {
      background-color: #6c63ff;
      color: white;
      text-decoration: none;
	  width: 100%;
	  
      a:hover {
		  width:100%auto;
      }
    }
  }
`;

export const RightNavbar = (props) => {
  const [open, setOpen] = useState(props.open);

useEffect(() => {
	setOpen(props.open);

}, [props.open])

  const renderMenuItem = (menuLabel) => {
	console.log("dupa" + open);
    if (open) return <p>{menuLabel}</p>;
    else return null;
  
  };
  return (
    <UI open={props.open}>
      <li>
        <NavLink to="/products">
          <DotsIcon size={"1.2rem"} />
          {renderMenuItem("Produkty")}
        </NavLink>
      </li>

      <li>
        <NavLink to="/shoppingCart">
          <ShoppingCartIcon size={"1.2rem"} />
          {renderMenuItem("Cart")}
        </NavLink>
      </li>

      <li>
        <NavLink to="/about">
          <ChatIcon size={"1.2rem"} />
		  {renderMenuItem("Messages")}
        </NavLink>
      </li>

      <li>
        <NavLink to="/">
          <GithubIcon size={"1.2rem"} />
		  {renderMenuItem("Github")}
        </NavLink>
      </li>

      <li>
        <NavLink to="/">
          <TwitterIcon size={"1.2rem"} />
		  {renderMenuItem("Twitter")}

        </NavLink>
      </li>

      <li>
        <NavLink to="/users">
          <UserIcon size={"1.2rem"} />
		  {renderMenuItem("Users")}

        </NavLink>
      </li>

      {props.children}
    </UI>
  );
};
