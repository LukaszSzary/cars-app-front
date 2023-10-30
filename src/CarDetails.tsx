import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Car } from './Car';

//import Select from 'react-select';
interface CD {
    car: Car
    setCar: (car: Car | undefined) => void
}

export default function CarDetails({ car, setCar }: CD) {

    const [validated, setValidated] = useState<boolean>(false);
    const [localCar, setLocalCar] = useState<Car>(
        {
            id: car.id,
            brand: car.brand,
            model: car.model,
            doorsNumber: car.doorsNumber,
            luggageCapacity: car.luggageCapacity,
            engineCapacity: car.engineCapacity,
            fuelType: car.fuelType,//string,
            productionDate: car.productionDate,
            carFuelConsumption: car.carFuelConsumption,
            bodyType: car.bodyType
        })
    const handleSubmit = () => {

    }

    return (
        <div id="CarDetails">
            <label>{car.brand}</label>

            <Form noValidate validated={validated} onSubmit={handleSubmit} onReset={handleSubmit}>

                <Form.Group controlId='Fbrand' >
                    <Form.Label>Marka</Form.Label>
                    <Form.Control required type="text" defaultValue={localCar.brand} onChange={e => { setLocalCar({ ...localCar, brand: e.target.value }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Model</Form.Label>
                    <Form.Control required type="text" defaultValue={localCar.model} onChange={e => { setLocalCar({ ...localCar, model: e.target.value }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Liczba drzwi</Form.Label>
                    <Form.Control required type="text" defaultValue={localCar.doorsNumber} onChange={e => { setLocalCar({ ...localCar, doorsNumber: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność bagażnika</Form.Label>
                    <Form.Control required type="text" defaultValue={localCar.luggageCapacity} onChange={e => { setLocalCar({ ...localCar, luggageCapacity: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność silnika</Form.Label>
                    <Form.Control required type="text" defaultValue={localCar.engineCapacity} onChange={e => { setLocalCar({ ...localCar, engineCapacity: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj paliwa</Form.Label>
                    <select aria-label="fuelType" defaultValue={localCar.fuelType} onChange={e => { setLocalCar({ ...localCar, fuelType: Number(e.target.value) }) }}>
                        <option value="0">Petrol</option>
                        <option value="1">Hybrid</option>
                        <option value="2">Diesel</option>
                        <option value="3">LPG</option>
                    </select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Data produkcji</Form.Label>
                    <Form.Control required type="text" defaultValue={localCar.productionDate.substring(0, 10)} onChange={e => { setLocalCar({ ...localCar, productionDate: e.target.value }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Spalanie</Form.Label>
                    <Form.Control required type="text" defaultValue={localCar.carFuelConsumption} onChange={e => { setLocalCar({ ...localCar, carFuelConsumption: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj</Form.Label>
                    <select aria-label="bodyType" defaultValue={localCar.bodyType} onChange={e => { setLocalCar({ ...localCar, bodyType: Number(e.target.value) }) }}>
                        <option value="0">Hatchback</option>
                        <option value="1">Sedan</option>
                        <option value="2">Kombi</option>
                        <option value="3">SUV</option>
                        <option value="4">Roadster</option>
                    </select>
                </Form.Group>




                <Button type="button" onClick={() => setCar(undefined)}>Odrzuć zmiany</Button><Button type="submit"> Zapisz zmiany</Button>
            </Form>
        </div>
    )
}
