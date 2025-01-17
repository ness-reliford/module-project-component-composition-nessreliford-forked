import React from "react";
import Figure from "./Figure";
import styled from "styled-components";

const StyledCard = styled.div `
  
   border: 1px solid black;
   background-color: CadetBlue;
   padding: 2rem;
   border-radius: 12px;

   h2 {
    margin: 0 0 1rem 0;
    
   }

   p {
    margin: 0 0 1.5rem 0;
    color: ${pr => pr.$color};

    &::first-line {
      font-size: 1.5em;
    }
   }
  
`

export default function Card({title, text, imgURL, date}){
    return(
      <StyledCard $color= "AliceBlue"className= 'card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <Figure 
        imgURL ={imgURL}
        caption = {date}
        />
       </StyledCard>
    )
  }
