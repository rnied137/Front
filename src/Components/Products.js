import React from "react";
import styled, { css } from "styled-components";
import Item from "./Grid/Item";
import Product from './Product';
import Grid from "@material-ui/core/Grid";






const colors = ["blue", "pink", "teal", "red", "#ff6584", "#6C63FF"];




const Image = () => {
  return <img src="/image.svg" alt="text"/>
}

const Products = () => {
  return (
    <div>
      To jest strona z produktami
      <Grid container spacing={3}>
<Grid item xs={4}>
<Product/>
</Grid>
<Grid item xs={4}>
<Product/>

</Grid>
<Grid item xs={4}>
<Product/>

</Grid>
<Grid item xs={4}>
<Product/>
</Grid>
<Grid item xs={4}>
<Product/>

</Grid>
<Grid item xs={4}>
<Product/>

</Grid>


      </Grid>
    </div>
  );
};

export default Products;
