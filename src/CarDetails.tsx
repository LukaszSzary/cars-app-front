import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Car } from './Car';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/CarDetails.css';
//import Select from 'react-select';
interface CD {
    car: Car
    setCar: (car: Car | undefined) => void,
    saveEditedCar: (car: Car | undefined) => void
}

export default function CarDetails({ car, setCar, saveEditedCar }: CD) {

    const [validated, setValidated] = useState<boolean>(false);
    const [localCar, setLocalCar] = useState<Car>(
        {
            id: car.id,
            brand: car.brand,
            model: car.model,
            doorsNumber: car.doorsNumber,
            luggageCapacity: car.luggageCapacity,
            engineCapacity: car.engineCapacity,
            fuelType: car.fuelType,
            productionDate: car.productionDate,
            carFuelConsumption: car.carFuelConsumption,
            bodyType: car.bodyType
        })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        saveEditedCar(localCar);
    }

    return (
        <div id="CarDetails">
            <Form.Label><h3>Szczegóły</h3></Form.Label>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group>
                    <Form.Label>Marka</Form.Label>
                    <Form.Control type="text" defaultValue={localCar.brand} onChange={e => { setLocalCar({ ...localCar, brand: e.target.value }) }} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Model</Form.Label>
                    <Form.Control required type="text" defaultValue={localCar.model} onChange={e => { setLocalCar({ ...localCar, model: e.target.value }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Liczba drzwi</Form.Label>
                    <Form.Control required min={1} type="number" defaultValue={localCar.doorsNumber} onChange={e => { setLocalCar({ ...localCar, doorsNumber: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność bagażnika</Form.Label>
                    <Form.Control required type="number" defaultValue={localCar.luggageCapacity} onChange={e => { setLocalCar({ ...localCar, luggageCapacity: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność silnika</Form.Label>
                    <Form.Control required min={0.9} type="number" defaultValue={localCar.engineCapacity} onChange={e => { setLocalCar({ ...localCar, engineCapacity: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj paliwa</Form.Label>
                    <Form.Select aria-label="fuelType" defaultValue={localCar.fuelType} onChange={e => { setLocalCar({ ...localCar, fuelType: Number(e.target.value) }) }}>
                        <option value="0">Petrol</option>
                        <option value="1">Hybrid</option>
                        <option value="2">Diesel</option>
                        <option value="3">LPG</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Data produkcji</Form.Label>
                    <Form.Control required type="date" defaultValue={localCar.productionDate.substring(0, 10)} onChange={e => { setLocalCar({ ...localCar, productionDate: e.target.value }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Spalanie</Form.Label>
                    <Form.Control required min={1} type="number" defaultValue={localCar.carFuelConsumption} onChange={e => { setLocalCar({ ...localCar, carFuelConsumption: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj</Form.Label>
                    <Form.Select aria-label="bodyType" defaultValue={localCar.bodyType} onChange={e => { setLocalCar({ ...localCar, bodyType: Number(e.target.value) }) }}>
                        <option value="0">Hatchback</option>
                        <option value="1">Sedan</option>
                        <option value="2">Kombi</option>
                        <option value="3">SUV</option>
                        <option value="4">Roadster</option>
                    </Form.Select>
                </Form.Group>
                <div id="buttons">
                    <Button onClick={() => alert("OMGGG?!!")}>Usuń auto</Button>
                    <Button type="button" onClick={() => setCar(undefined)}>Odrzuć zmiany</Button>
                    <Button type="submit"> Zapisz zmiany</Button>
                </div>
            </Form>
        </div>
    )
}
