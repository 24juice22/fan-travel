import React from 'react'
import { IBrewery} from '../interfaces'

interface BrewProps {
    brewery: IBrewery;
}

const Brew = ({brewery}: BrewProps) => {
  return (
    <div className="brewCard">
      <p>{brewery.name}</p> 
      <p>{brewery.city}</p>
    </div>
  )
}

export default Brew