import React from 'react';
import { Car,FUELTYPES,BODYTYPES } from './Car';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  const URL = 'https://localhost:7225/api/Cars/';
  const [Cars, setCars] = useState<Car[]>([]);
  const [Car, setCar] = useState<Car>({
    "id": "1993d559-96a7-437b-b36b-11b204d2b3b0",
    "brand": "Renault",
    "model": "Clio II",
    "doorsNumber": 5,
    "luggageCapacity": 300,
    "engineCapacity": 1149,
    "fuelType":3,
    "productionDate": "2018",
    "carFuelConsumption": 7.2,
    "bodyType": 0
  });
  const [id, setId] = useState<string>();
  useEffect(() => {
    if(id!=undefined){
    axios.get<Car>(URL.concat(id)).then(responce => {setCar(responce.data) })
    }
  }, [URL,id]);

  function nig() 
  {
    axios.get<Car[]>(URL).then(responce => {setCars(responce.data) });
  }

  return (
    <div className="App">
      <header className="App-header">
        ddd
      </header>
      <button onClick={() => setId('1993d559-96a7-437b-b36b-11b204d2b3b0/')}>ddddddddddddddddddddd</button>
      <ul>
        <div>{FUELTYPES[Car.fuelType]} </div>
        

      </ul>
      <button onClick={()=>(nig())}>gggg</button>
      <ol>
            {Cars.map(p => (
                <li key={p.id}>
                    <div>{p.fuelType}</div>
                </li>
            ))}
        </ol>
    </div>
  );
}

export default App;
