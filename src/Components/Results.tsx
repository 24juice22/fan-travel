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
      <h2 className="results-title">
        Upcoming games involving 
        <span> {keyword.toUpperCase()}</span>
      </h2>
      <div className="row">
        {results.map((item: IResults) => <Card results={item} keyword={keyword}/>)}
      </div>

    </div>
  )
}

export default Results