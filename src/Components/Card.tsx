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
  },[results])

  return (
    <div className="card text-center border col-md-5 col-lg-5 col-xl-3">
        <div  className="card-header text-white">{results.date}</div>
        <div className="card-body">
          <h3 className="card-title">{results.name}</h3>
          <p className="card-text">{results.locationName}</p>
          <p className="card-text">{results.city}, {results.state}</p>
          <p className="card-text low-price">Lowest Price Found ${results.priceMin}</p>
          <a href="#" className="btn button-primary">Buy Tickets</a>
        </div>
        <div className="card-footer text-white bg-dark breweries">
          <h3 className="card-title">BrewPub Snapshot</h3>
          <p className="card-subtitle">Click To View Website</p>
          <div className="brewCards">
            {brewery.map((item: IBrewery) => <Brew brewery={item} />)}
          </div>
          <a href="#" className="btn continue">●●●</a>
        </div>
    </div>
  )
}

export default Card