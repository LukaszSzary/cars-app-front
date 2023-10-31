import { Button } from 'react-bootstrap';
import { Car, FUELTYPES } from './Car'
import {CarToAdd} from './CarToAdd';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AC {
    setCarToAdd: (a:CarToAdd | undefined)=>void
}

export default function AddCar({ setCarToAdd }: AC) {

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

    const [validated, setValidated] = useState<boolean>(false);
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

                <Form.Group>
                    <Form.Label>Marka</Form.Label>
                    <Form.Control type="text" defaultValue={localCarToAdd.brand} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, brand: e.target.value }) }} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Model</Form.Label>
                    <Form.Control required type="text" defaultValue={localCarToAdd.model} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, model: e.target.value }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Liczba drzwi</Form.Label>
                    <Form.Control required min={1} type="number" defaultValue={localCarToAdd.doorsNumber} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, doorsNumber: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność bagażnika</Form.Label>
                    <Form.Control required type="number" defaultValue={localCarToAdd.luggageCapacity} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, luggageCapacity: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność silnika</Form.Label>
                    <Form.Control required min={ 0.9} type="number" defaultValue={localCarToAdd.engineCapacity} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, engineCapacity: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj paliwa</Form.Label>
                    <Form.Select aria-label="fuelType" defaultValue={localCarToAdd.fuelType} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, fuelType: Number(e.target.value) }) }}>
                        <option value="0">Petrol</option>
                        <option value="1">Hybrid</option>
                        <option value="2">Diesel</option>
                        <option value="3">LPG</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Data produkcji</Form.Label>
                    <Form.Control required type="date" defaultValue={localCarToAdd.productionDate.substring(0, 10)} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, productionDate: e.target.value }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Spalanie</Form.Label>
                    <Form.Control required min={1} type="number" defaultValue={localCarToAdd.carFuelConsumption} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, carFuelConsumption: Number(e.target.value) }) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj</Form.Label>
                    <Form.Select aria-label="bodyType" defaultValue={localCarToAdd.bodyType} onChange={e => { setLocalCarToAdd({ ...localCarToAdd, bodyType: Number(e.target.value) }) }}>
                        <option value="0">Hatchback</option>
                        <option value="1">Sedan</option>
                        <option value="2">Kombi</option>
                        <option value="3">SUV</option>
                        <option value="4">Roadster</option>
                    </Form.Select>
                </Form.Group>
                <div id="buttons">
                    <Button type="button" >Odrzuć zmiany</Button>
                    <Button type="submit"> Zapisz zmiany</Button>
                </div>
            </Form>
       </>
    )
}