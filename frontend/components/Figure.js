import React from "react"
import styled from "styled-components"


const StyledFigure = styled.figure `
  max-width: 300px;

  figcaption {
    font-style: italic;
  }
`


export default function Figure({imgURL, caption}) {
    return(
      <StyledFigure>
          <img src={imgURL}/>
          <figcaption>Dope Space Pic Taken on {caption}</figcaption>
        </StyledFigure>
    )
  }