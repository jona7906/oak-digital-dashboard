import { useState, useEffect} from 'react';

function DisplayWeather(props) {
    
    if(!props.weatherData){
        return <div><p>temp</p></div>
    }

    const [weather, setWeather] = useState([]);
    useEffect(() => {
        setWeather(props.weatherData)
        }, [props.weatherData]);
        console.log(weather)
    
  return (
<h2 className="degrees">{}</h2>
  )
}

export default DisplayWeather;

