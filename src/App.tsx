import axios from 'axios';
import { Car } from './Car';
import { useState, useEffect } from 'react';
import CarsList from './CarsList';
import CarDetails from './CarDetails';
import './css/App.css';
import AddCar from './AddCar';
import { CarToAdd } from './CarToAdd';

function App() {
  //useStates
  const URL = 'https://localhost:7225/api/Cars';
  const [Cars, setCars] = useState<Car[]>([]);
  const [SelectedCar, setSelectedCar] = useState<Car | undefined>();
  const [EditedCar, setEditedCar] = useState<Car | undefined>();
  const [ProcessOfAddingCarInProgress, setProcessOfAddingCarInProgress] = useState<boolean>(false);
  const [CarToAdd, setCarToAdd] = useState<CarToAdd | undefined>();
  const [IdOfCarToDelete, setIdOfCarToDelete] = useState<string | undefined>();
  //useEffects
  useEffect(() => {
    axios.get<Car[]>(URL).then(responce => { setCars(responce.data) });
  }, [URL]);

  useEffect(() => {
    if (EditedCar !== undefined) {
      axios.put<Car>(URL, EditedCar);
    }
  }, [EditedCar])

  useEffect(() => {
    if (CarToAdd !== undefined) {
      axios.post<CarToAdd>(URL, CarToAdd);
    }

  }, [CarToAdd])

  useEffect(() => {
    if (IdOfCarToDelete !== undefined) {
      axios.delete<string>(URL.concat('?id=').concat(IdOfCarToDelete));
      setCars(Cars.filter((e) => e.id !== IdOfCarToDelete));
    }

  }, [IdOfCarToDelete])


  return (
    <div className="App">

      {<CarsList cars={Cars} setCar={setSelectedCar} selectedCar={SelectedCar} addCar={setProcessOfAddingCarInProgress} isCarBeeingAdded={ProcessOfAddingCarInProgress} />}
      {SelectedCar && <CarDetails car={SelectedCar} setCar={setSelectedCar} saveEditedCar={setEditedCar} setIdOfCarToDelete={setIdOfCarToDelete} />}
      {ProcessOfAddingCarInProgress && <AddCar setCarToAdd={setCarToAdd} setProcessOfAddingCarInProgress={setProcessOfAddingCarInProgress} />}

    </div>
  );
}

export default App;