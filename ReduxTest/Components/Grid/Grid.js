 import styled from 'styled-components';
 import React from 'react'

 const GridElement = styled.div`
  display: grid;
  grid-template-rows: 50px 50px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;




const Grid = () => {
    return (
     <GridElement>

     </GridElement>
    )
}


export default Grid;