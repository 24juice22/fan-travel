import React, { useState, useEffect } from 'react'
import { IResults, IBrewery } from "../interfaces"
import Brew from "./Brew"

interface CardProps {
    results: IResults;
    keyword: string;
}

const Card = ({ results, keyword }: CardProps) => {
  const [brewery, setBrewery] = useState<IBrewery[]>([]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_dist=${results.location.lat},${results.location.long}&by_type=brewpub&per_page=3`)
      .then(res=>res.json())
      .then(data=> {
        console.log(data)
        setBrewery(data)
      })
  },[keyword])

  return (
    <div className="card">
        <h3>{results.name}</h3>
        <p>{results.locationName}</p>
        <p>{results.city}, {results.state}</p>
        <p>{results.date}</p>
        <p>{results.location.lat}</p>
        <p>{results.location.long}</p>
        <p>Lowest Price: ${results.priceMin}</p>
        <div className="breweries">
          <h3>BrewPub Snapshot</h3>
          <div className="brewCards">
            {brewery.map((item: IBrewery) => <Brew brewery={item} />)}
          </div>
        </div>
    </div>
  )
}

export default Card