import React from "react";
import styled, { css } from "styled-components";

const colors = ["blue", "pink", "teal", "red"];

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  color: red;
  border: 5px solid purple;
  ${({ color = colors[Math.floor(Math.random() * (colors.length - 1)) + 1] }) =>
    css`
      background-color: ${color};
    `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 50px 50px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const Products = () => {
  return (
    <div>
      To jest strona z produktami
      <Grid>
        <Item>
          <p>1</p>
        </Item>
        <Item>
          <p>2</p>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item>
          <p>3</p>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item>
          <p>1</p>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item>
          <p>1</p>
        </Item>
      </Grid>
    </div>
  );
};

export default Products;
