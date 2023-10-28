import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Car } from './Car';
import { useState } from 'react';

function App() {
  const [Cars, setCars] = useState<Car[]>([{
    id: "1993d559-96a7-437b-b36b-11b204d2b3b0",
    brand: "Renault",
    model: "Clio II",
    doorsNumber: 5,
    luggageCapacity: 300,
    engineCapacity: 1149,
    fuelType: "f",
    productionDate: "2005-07-19T07:39:22.8536518",
    carFuelConsumption: 7.2,
    bodyType: "f"
  },
  {
    id: "1993d559-96a7-437b-b36b-11b204d2b3b0",
    brand: "Renault",
    model: "Clio II",
    doorsNumber: 5,
    luggageCapacity: 300,
    engineCapacity: 1149,
    fuelType: "f",
    productionDate: "2005-07-19T07:39:22.8536518",
    carFuelConsumption: 7.2,
    bodyType: "f"
  }]);
  return (
    <div className="App">
      <header className="App-header">
        ddd
      </header>
      <ul>
        {Cars.map(car => (<li key={car.id}>
          <div>{car.productionDate} {car.brand}</div>
        </li>))}

      </ul>
    </div>
  );
}

export default App;
