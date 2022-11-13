import React from 'react'
import { IResults } from "../interfaces"

interface CardProps {
    results: IResults;
}

const Card = ({ results }: CardProps) => {
  return (
    <div className="card">
        <h3>{results.name}</h3>
        <p>{results.locationName}</p>
        <p>{results.city}, {results.state}</p>
        <p>{results.date}</p>
        <p>Lowest Price: {results.priceMin}</p>
        <p>Highest Price: {results.priceMax}</p>
    </div>
  )
}

export default Card