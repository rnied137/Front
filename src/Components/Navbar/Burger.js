import React, { useState } from "react";
import styled from "styled-components";

import { RightNavbar } from "./RightNavbar";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  justify-content: space-between;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    flex-flow: column nowrap;
  }

  div {
    width: 2.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "gray" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transform: all 0.7s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavbar open={open} />
    </>
  );
};

export default Burger;
