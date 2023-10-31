import React from 'react';
import axios from 'axios';
import { Car } from './Car';
import { useState, useEffect } from 'react';
import CarsList from './CarsList';
import CarDetails from './CarDetails';
import './css/App.css';
import { Button } from 'react-bootstrap';
import AddCar from './AddCar';
import {CarToAdd} from './CarToAdd';

function App() {
  //useStates
  const URL = 'https://localhost:7225/api/Cars';
  const [Cars, setCars] = useState<Car[]>([]);
  const [SelectedCar, setSelectedCar] = useState<Car | undefined>();
  const [EditedCar, setEditedCar] = useState<Car | undefined>();
  const [ProcessOfAddingCarInProgress, setProcessOfAddingCarInProgress] = useState<boolean>(false);
  const [CarToAdd, setCarToAdd] = useState<CarToAdd | undefined>();

  //useEffects
  useEffect(() => {
    axios.get<Car[]>(URL).then(responce => { setCars(responce.data) });
  }, [URL]);

  useEffect(() => {
    if (EditedCar !== undefined) {
      axios.put<Car>(URL, EditedCar);
    }
  }, [EditedCar])


  return (
    <div className="App">
      <h5>{EditedCar?.brand}</h5>

      {<CarsList cars={Cars} setCar={setSelectedCar} selectedCar={SelectedCar} addCar={setProcessOfAddingCarInProgress} isCarBeeingAdded={ProcessOfAddingCarInProgress} />}
      {SelectedCar && <CarDetails car={SelectedCar} setCar={setSelectedCar} saveEditedCar={setEditedCar} />}
      {ProcessOfAddingCarInProgress && <AddCar setCarToAdd={setCarToAdd} />}


    </div>
  );
}

export default App;