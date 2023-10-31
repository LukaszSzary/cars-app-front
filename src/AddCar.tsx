import { Button } from 'react-bootstrap';
import { CarToAdd } from './CarToAdd';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AC {
    setCarToAdd: (a: CarToAdd | undefined) => void,
    setProcessOfAddingCarInProgress: (a: boolean) => void
}

export default function AddCar({ setCarToAdd, setProcessOfAddingCarInProgress }: AC) {

    const [validated, setValidated] = useState<boolean>(false);

    const [localCarToAdd, setLocalCarToAdd] = useState<CarToAdd>(
        {
            brand: "",
            model: "",
            doorsNumber: 0,
            luggageCapacity: 0,
            engineCapacity: 0,
            fuelType: 0,
            productionDate: "",
            carFuelConsumption: 0,
            bodyType: 0
        })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        setCarToAdd(localCarToAdd);
        
    }

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label><h3>Dodaj nowy pojazd</h3></Form.Label>
                <Form.Group>
                    <Form.Label>Marka</Form.Label>
                    <Form.Control type="text" onChange={e => { setLocalCarToAdd({ ...localCarToAdd, brand: e.target.value }) }} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Model</Form.Label>
                    <Form.Control required type="text" onChange={e => { setLocalCarToAdd({ ...localCarToAdd, model: e.target.value }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Liczba drzwi</Form.Label>
                    <Form.Control required min={1} type="number" onChange={e => { setLocalCarToAdd({ ...localCarToAdd, doorsNumber: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność bagażnika</Form.Label>
                    <Form.Control required type="number" step={0.1} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, luggageCapacity: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność silnika</Form.Label>
                    <Form.Control required min={0.9} step={0.1} type="number" onChange={e => { setLocalCarToAdd({ ...localCarToAdd, engineCapacity: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj paliwa</Form.Label>
                    <Form.Select aria-label="fuelType" required onChange={e => { setLocalCarToAdd({ ...localCarToAdd, fuelType: Number(e.target.value) }) }}>
                        <option ></option>
                        <option value="0">Petrol</option>
                        <option value="1">Hybrid</option>
                        <option value="2">Diesel</option>
                        <option value="3">LPG</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Data produkcji</Form.Label>
                    <Form.Control required type="date" onChange={e => { setLocalCarToAdd({ ...localCarToAdd, productionDate: e.target.value }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Spalanie</Form.Label>
                    <Form.Control required min={1} step={0.1} type="number" onChange={e => { setLocalCarToAdd({ ...localCarToAdd, carFuelConsumption: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj</Form.Label>
                    <Form.Select aria-label="bodyType" required onChange={e => { setLocalCarToAdd({ ...localCarToAdd, bodyType: Number(e.target.value) }) }}>
                        <option ></option>
                        <option value="0">Hatchback</option>
                        <option value="1">Sedan</option>
                        <option value="2">Kombi</option>
                        <option value="3">SUV</option>
                        <option value="4">Roadster</option>
                    </Form.Select>
                </Form.Group>
                <div id="buttons">
                    <Button type="button" onClick={() => setProcessOfAddingCarInProgress(false)} >Powrót</Button>
                    <Button type="submit"> Dodaj pojazd</Button>
                </div>
            </Form>
        </>
    )
}