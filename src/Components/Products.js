import React from "react";
import styled, { css } from "styled-components";
import Item from "./Grid/Item";

const colors = ["blue", "pink", "teal", "red", "#ff6584", "#6C63FF"];



export const Grid = styled.div`
  display: grid;
  grid-template-rows: 50px 50px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const Image = () => {
  return <img src="/image.svg" alt="text"/>
}

const Products = () => {
  return (
    <div>
      To jest strona z produktami
      <Grid>
        <Item primary={"#fdfdfd"}>
<Image/>
        </Item>
        <Item primary={"#fdfdfd"}>
          <p>2</p>
        </Item>
        <Item primary={"#fdfdfd"}>23</Item>
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
