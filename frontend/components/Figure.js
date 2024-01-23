import React from "react"

export default function Figure({imgURL, caption}) {
    return(
      <figure>
          <img src={imgURL}/>
          <figcaption>Dope Space Pic Taken on {caption}</figcaption>
        </figure>
    )
  }