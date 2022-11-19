import React from 'react'
import { IBrewery} from '../interfaces'

interface BrewProps {
    brewery: IBrewery;
}

const Brew = ({brewery}: BrewProps) => {
  return (
    <div className="brewCard">
      <p className="brewCard-name">{brewery.name}</p> 
      <p className="brewCard-city">{brewery.city}</p>
    </div>
  )
}

export default Brew