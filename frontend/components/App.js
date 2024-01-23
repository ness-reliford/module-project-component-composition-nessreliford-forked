import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'


const api_key = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"


function App() {
  const [info, setInfo] = useState({})
  useEffect(()=> {
    function fetchPhoto (){
      axios.get(api_key)
      .then(res => {
        const info = res.data
        console.log(info)
        setInfo(info)
      })
      .catch()
    }
    //fetchPhoto()
    setInfo(
      {
       
          "date": "2024-01-22",
          "explanation": "Can the Moon and a mountain really cast similar shadows? Yes, but the division between light and dark does not have to be aligned. Pictured, a quarter moon was captured above the mountain Grivola in Italy in early October of 2022.  The Sun is to the right of the featured picturesque landscape, illuminating the right side of the Moon in a similar way that it illuminates the right side of the mountain. This lunar phase is called \"quarter\" because the lit fraction visible from Earth is one quarter ...",
          "hdurl": "https://apod.nasa.gov/apod/image/2401/GrivolaMoon_Micon_1600.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "Shadows of Mountain and Moon",
          "url": "https://apod.nasa.gov/apod/image/2401/GrivolaMoon_Micon_1080.jpg"
        
      },
      
    )
  }, [])
  
  if(!info) return "Fetching Photo of the Day..."
  return (
    <>
     <Card 
     title = {info.title}
     text = {info.explanation}
     imgURL = {info.url}
     date = {info.date}
     />
    </>
  )
}

export default App
