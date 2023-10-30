import ListGroup from 'react-bootstrap/ListGroup';
import { Car, FUELTYPES } from './Car'
import './css/CarsList.css';

interface CL {
    cars: Car[]
    setCar: (car: Car) => void,
    selectedCar: Car | undefined
}

export default function CarsList({ cars, setCar, selectedCar }: CL) {
    return (
        <div id='CarsList'>
            <h3>Lista aut</h3>
            <ListGroup as="ol" >
                {cars.map((car) => (

                    <ListGroup.Item as="li" key={car.id} action onClick={() => (setCar(car))} disabled={selectedCar !== undefined} >
                        {car.brand} {car.model}, {FUELTYPES[car.fuelType]}
                    </ListGroup.Item>))}

            </ListGroup>
        </div>
    );
}