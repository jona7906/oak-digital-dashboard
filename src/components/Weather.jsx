import React, { useEffect, useState } from "react";
import DisplayWeather from "./DisplayWeather"
export default function Weather() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&appid=9fef0470f56e191928685ef0d4859eef`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log("Weather", result)
    });
  }
  
  useEffect(() => {   
    fetchData();
  }, [lat,long])

  // function createBackground(allinfo){
  //   let weather = allinfo.weather[0].main;
  //   let formatWeather = weather.toLowerCase();
  //   let video = `.../public/videos/${formatWeather}.mp4`
  //   console.log(video);
  //   return video;
  // }

  if(!data){
    alert("NO DATA");
  }
  
  return (
    <div className="Weather">
      {/* {createBackground(data)} */}
      <DisplayWeather weatherData={data}></DisplayWeather>
      {/* { <h2 className="degrees">{}</h2> } */}
    </div>
  );
}


// Den rigtige fetch med skjult URL/API - "process not defined" ERROR
// ${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}