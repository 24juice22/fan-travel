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
    <div className="card text-center">
        <div  className="card-header text-white bg-dark">{results.date}</div>
        <div className="card-body">
          <h3 className="card-title">{results.name}</h3>
          <p className="card-text">{results.locationName}</p>
          <p className="card-text">{results.city}, {results.state}</p>
          <p className="card-text">Lowest Price Found ${results.priceMin}</p>
          <a href="#" className="btn button-primary">Buy Tickets</a>
        </div>
        <div className="card-footer text-white bg-dark breweries">
          <h3 className="card-title">BrewPub Snapshot</h3>
          <div className="brewCards">
            {brewery.map((item: IBrewery) => <Brew brewery={item} />)}
          </div>
          <a href="#" className="btn button-primary">More Breweries</a>
        </div>
    </div>
  )
}

export default Card