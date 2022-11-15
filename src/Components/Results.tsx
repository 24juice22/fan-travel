import React, { FC } from 'react'
import { IResults } from "../interfaces"
import Card from "./Card"

interface ResultsProps {
    results: IResults[];
    keyword: string;
}

const Results: FC<ResultsProps> = ({ results, keyword }) => { 
  console.log(results);
  return (
    <div className="results">
      <h2 className="results-title">{keyword}</h2>
      {results.map((item: IResults) => <Card results={item} keyword={keyword}/>)}
    </div>
  )
}

export default Results