import React from 'react'
import { IBrewery} from '../interfaces'

interface BrewProps {
    brewery: IBrewery;
}

const Brew = ({brewery}: BrewProps) => {
  
  let breweryName = brewery.name
  if (brewery.name.split("").includes("-"))
    breweryName = brewery.name.split("-")[0]
  if (brewery.name.split("").includes("/"))
    breweryName = brewery.name.split("/")[0]

  return (
    <a className="btn brewCard" href={brewery.website} target="_blank">
      <p className="brewCard-name">{breweryName}</p> 
      <p className="brewCard-city">{brewery.city}</p>
    </a>
  )
}

export default Brew