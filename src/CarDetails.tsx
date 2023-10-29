import {  useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Car, FUELTYPES, BODYTYPES } from './Car';
import { FormGroupProps } from 'react-bootstrap';
import {useRef} from 'react';
import { useReducer } from 'react';

interface CD {
    car: Car
}

export default function CarDetails({ car }: CD) {
    
  const [validated, setValidated] = useState<boolean>(false);
    
  const handleSubmit = () => {
    
  }
   
    return (
        <div id="CarDetails">
            
        <Form noValidate validated={validated} onSubmit={handleSubmit} onReset={handleSubmit}>
            
                <Form.Group controlId='Fbrand' >
                    <Form.Label>Marka</Form.Label>
                    <Form.Control  required type="text" defaultValue={car.brand} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Model</Form.Label>
                    <Form.Control  required type="text" defaultValue={car.model} />
                    </Form.Group>
                <Form.Group>
                    <Form.Label>Liczba drzwi</Form.Label>
                    <Form.Control required type="text" defaultValue={car.doorsNumber} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność bagażnika</Form.Label>
                    <Form.Control required type="text" defaultValue={car.luggageCapacity} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pojemność silnika</Form.Label>
                    <Form.Control required type="text" defaultValue={car.engineCapacity} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj paliwa</Form.Label>
                    <Form.Control required type="text" defaultValue={FUELTYPES[car.fuelType]} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Data produkcji</Form.Label>
                    <Form.Control required type="text" defaultValue={car.productionDate.substring(0,10)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Spalanie</Form.Label>
                    <Form.Control required type="text" defaultValue={car.carFuelConsumption} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rodzaj</Form.Label>
                    <Form.Control required type="text" defaultValue={BODYTYPES[car.bodyType]} />
                </Form.Group>

            
            <Button type="button">Odrzuć zmiany</Button><Button type="submit"> Zapisz zmiany</Button> 
        </Form>
        </div>
    )
}
