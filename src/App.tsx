import React from 'react';
import axios from 'axios';
import { Car} from './Car';
import { useState ,useEffect } from 'react';
import CarsList from './CarsList';
import CarDetails from './CarDetails';
import './css/App.css';

function App() {
  const URL = 'https://localhost:7225/api/Cars/';
  const [Cars, setCars] = useState<Car[]>([]);
  const [SelectedCar, setSelectedCar] = useState<Car>();
  //useEffects
  useEffect(() => {
    axios.get<Car[]>(URL).then(responce => { setCars(responce.data) })
  }, [URL]);

  //temporaty stuff
  function Details(){}
 
    const [id, setId] = useState<string>();
  //end
  return (
    <div className="App">

      {!SelectedCar && <CarsList cars={Cars} setCar={setSelectedCar}/>}
      {SelectedCar && <CarDetails car={SelectedCar} />}
      
      
    </div>
  );
}

export default App;