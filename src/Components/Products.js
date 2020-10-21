import React from "react";
import styled, { css } from "styled-components";

const colors = ["blue", "pink", "teal", "red", "#ff6584", "#6C63FF"];

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  ${({ color = colors[Math.floor(Math.random() * (colors.length - 0)) + 0] }) =>
    css`
      background-color: ${color};
      border: 5px solid ${color};
      border-radius: 10px;
      color: ${color};

    `}
    ${({ fontColor = colors[Math.floor(Math.random() * (colors.length - 0)) + 0] }) =>
    css`
     
      color: ${fontColor};

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
        <Item>23</Item>
        <Item>76</Item>
        <Item>
          <p>3</p>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item>
          <p>1</p>
        </Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>5</Item>
        <Item>
          <p>1</p>
        </Item>
      </Grid>
    </div>
  );
};

export default Products;
