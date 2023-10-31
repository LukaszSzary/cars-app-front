import ListGroup from 'react-bootstrap/ListGroup';
import { Car, FUELTYPES } from './Car'
import './css/CarsList.css';
import { Button } from 'react-bootstrap';
interface CL {
    cars: Car[]
    setCar: (car: Car) => void,
    selectedCar: Car | undefined,
    addCar: (t:boolean) => void,
    isCarBeeingAdded:boolean
}

export default function CarsList({ cars, setCar, selectedCar, addCar,isCarBeeingAdded }: CL) {
    return (
        <div id='CarsList'>
            <h3>Lista aut</h3>
            
            <ListGroup as="ol" >
            <Button onClick={()=>addCar(true)} disabled={(selectedCar !== undefined)||isCarBeeingAdded}>Dodaj pojazd</Button>
                {cars.map((car) => (

                    <ListGroup.Item as="li" key={car.id} action onClick={() => (setCar(car))} disabled={(selectedCar !== undefined)||isCarBeeingAdded} >
                        {car.brand} {car.model}, {FUELTYPES[car.fuelType]}
                    </ListGroup.Item>))}

            </ListGroup>
        </div>
    );
}