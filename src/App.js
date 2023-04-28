import React, { useState, useEffect }from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      console.log(res);
      setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <ThemeProvider className="App" theme={theme}>
      { data && <NasaPhoto photo={data}/> }
    </ThemeProvider>
  );
}

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

export default App;

/**
 * 
date: "2023-04-26"

explanation: "Was this a lucky shot? Although many amazing photographs are taken by someone who just happened to be in the right place at the right time, this image took skill and careful planning. First was the angular scale: if you shoot too close to the famous Arc de Triomphe in  Paris, France, the full moon will appear too small.  Conversely, if you shoot from too far away, the moon will appear  too large and not fit inside the Arc. Second is timing: the Moon only appears centered inside the Arc for small periods of time -- from this distance less than a minute. Other planned features include lighting, relative brightness, height, capturing a good foreground, and digital processing.  And yes, there is some luck involved -- for example, the sky must be clear. This time, the planning was successful, bringing two of humanity's most famous icons photographically together for all to enjoy.   Today's adventure link: Click \"Paris\" (above)"

hdurl: "https://apod.nasa.gov/apod/image/2304/MoonArc_zanarello_1365.jpg"

title: "The Moon through the Arc de Triomphe"
 */
