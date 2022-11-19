import React from 'react'
import { IBrewery} from '../interfaces'

interface BrewProps {
    brewery: IBrewery;
}

const Brew = ({brewery}: BrewProps) => {
  return (
    <p className="brewCard">{brewery.name} {brewery.city}</p>
  )
}

export default Brew