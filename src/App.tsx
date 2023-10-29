import React from 'react';
import axios from 'axios';
import { Car} from './Car';
import { useState ,useEffect } from 'react';
import CarsList from './CarsList';


function App() {
  const URL = 'https://localhost:7225/api/Cars/';

  const [Cars, setCars] = useState<Car[]>([]);
 
  //useEffects
  useEffect(() => {
    axios.get<Car[]>(URL).then(responce => { setCars(responce.data) })
  }, [URL]);

  //temporaty stuff
  function Details(){}
  const [Car, setCar] = useState<Car>({
    "id": "1993d559-96a7-437b-b36b-11b204d2b3b0",
    "brand": "Renault",
    "model": "Clio II",
    "doorsNumber": 5,
    "luggageCapacity": 300,
    "engineCapacity": 1149,
    "fuelType": 3,
    "productionDate": "2018",
    "carFuelConsumption": 7.2,
    "bodyType": 0
  });
    const [id, setId] = useState<string>();
  //end
  return (
    <div className="App">

      <CarsList cars={Cars} details={Details}/>
      
      
    </div>
  );
}

export default App;