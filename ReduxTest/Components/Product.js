import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styled from "styled-components";
import COLORS from "../colors";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const StyledButton = styled(Button)`
  && {
    color: white;
    padding: 15px 40px;
    background: linear-gradient(56deg, #6c63ff, #c7c5f7);
    border-radius: 85px;
    border: 0px;
    margin-top: 10px;
    margin-bottom: 20px;
    
  }
`;


const StyledPaper = styled(Paper)`
&& {
    
    background-color: lavender;
    border: 2px solid #6c63ff;


   
}
`;
const StyledImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 10px;
`;

const styledH4 = styled.h4`
  &&{
    color:white;

  }  
`;

const Product = () => {
  return (
    <div>
      <StyledPaper elevation={1} rounded>
        <Grid container>
          <Grid item xs={12}>
          <styledH4>Produkt</styledH4>
              </Grid>
          <Grid item xs={12}>
            <StyledImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXAAdfnXprRpP2nwns2wU0-uHHQFuH6AYwdg&usqp=CAU"
              alt="obrazek"
            />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <StyledButton>Button</StyledButton>
          </Grid>
        </Grid>
      </StyledPaper>
    </div>
  );
};

export default Product;
