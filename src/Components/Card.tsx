import React, { useState, useEffect } from 'react'
import { IResults, IWeather } from "../interfaces"

interface CardProps {
    results: IResults;
    keyword: string;
}

const Card = ({ results, keyword }: CardProps) => {
  const [weather, setWeather] = useState<IWeather>({} as IWeather)

  useEffect(() => {
    fetch(`https://weatherdbi.herokuapp.com/data/weather/${results.city}`)
      .then(res=>res.json())
      .then(data=> {
        console.log(data)
        setWeather({location: data.region, temp: data.currentConditions.temp.f})
      })
  },[keyword])

  const style = {
    backgroundImage: `url(${results.image})`
  }

  return (
    <div className="card" style={style}>
        <h3>{results.name}</h3>
        <p>{results.locationName}</p>
        <p>{results.city}, {results.state}</p>
        <p>{results.date}</p>
        <p>{results.location.lat}</p>
        <p>{results.location.long}</p>
        {weather.location !== "" && <p>{weather.location} Temp: {weather.temp} F</p>}
        <p>Lowest Price: ${results.priceMin}</p>
        <p>Highest Price: ${results.priceMax}</p>
    </div>
  )
}

export default Card