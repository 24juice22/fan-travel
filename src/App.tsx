import React, { FC, useState, useEffect } from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';
import Results from './Components/Results';
import { IResults } from './interfaces';

const App: FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [results, setResults] = useState<IResults[]>([]);

  useEffect(() => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationId=KZazBEonSMnZfZ7vFE1&promoterId=705&keyword=${keyword}&sort=date,asc&apikey=jkJRS9Z9edcB2GiXUjVBG8nlsoDOMVim`)
    .then(res => res.json())
    .then(data => {
      console.log(data._embedded.events)
      setResults(data._embedded.events.filter((item: any) => item.priceRanges).map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          date: item.dates.start.localDate,
          time: item.dates.start.localTime,
          priceMin: item.priceRanges[0].min,
          seatMap: item.seatmap.staticUrl,
          locationName: item._embedded.venues[0].name,
          city: item._embedded.venues[0].city.name,
          state: item._embedded.venues[0].state.name,
          location: {
            lat: item._embedded.venues[0].location.latitude,
            long: item._embedded.venues[0].location.longitude,
          }
        }
      }));
    }) 
  }, [keyword])

  return (
    <div className="App">
      <Navbar />
      <SearchForm setKeyword={setKeyword} />
      <Results results={results} keyword={keyword}/>
    </div>
  );
}

export default App;
