import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App(){
  const [url, setUrl]  = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  const [data, setData] = useState();
  const [newData, setNewData] = useState();

  useEffect(() => {
      const fetch_date = async() => {
        try{
          const result = await axios(url);
          const pokes = []
          for (let i = 0; i < 10; i++){
            const poke_data = await axios(result.data.results[i].url);
            console.log(JSON.stringify(poke_data.sprites));
            pokes.push(poke_data.sprites.front_default)
          }
          setData(
            pokes
          );
        }catch{
          console.log("error");
        }
      };
      fetch_date();
    }, [url]);

  return (
    <>
      <div className="App">

      </div>
    </>
  );
}

export default App;
