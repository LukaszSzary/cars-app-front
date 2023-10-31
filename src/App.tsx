import React from 'react';
import axios from 'axios';
import { Car } from './Car';
import { useState, useEffect } from 'react';
import CarsList from './CarsList';
import CarDetails from './CarDetails';
import './css/App.css';

function App() {
  const URL = 'https://localhost:7225/api/Cars';
  const [Cars, setCars] = useState<Car[]>([]);
  const [SelectedCar, setSelectedCar] = useState<Car | undefined>();
  const [EditedCar, setEditedCar] = useState<Car|undefined >();
  let p=true;
  //useEffects
  useEffect(() => {
    axios.get<Car[]>(URL).then(responce => { setCars(responce.data) });
  }, [URL]);

  useEffect(() => {
    if(EditedCar!==undefined){
    axios.put<Car>(URL, EditedCar);
    } 
  }, [EditedCar])

  
  return (
    <div className="App">
      <h5>{EditedCar?.brand}</h5>
      {<CarsList cars={Cars} setCar={setSelectedCar} selectedCar={SelectedCar} />}
      {SelectedCar && <CarDetails car={SelectedCar} setCar={setSelectedCar} saveEditedCar={setEditedCar} />}


    </div>
  );
}

export default App;