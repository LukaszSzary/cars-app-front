import ListGroup from 'react-bootstrap/ListGroup';
import {Car, FUELTYPES, BODYTYPES } from './Car'
import './css/CarsList.css';
interface CL{
    cars:Car[]
    details:()=>void
}

export default function CarsList({cars,details}:CL){
    return(
        <div id='CarsList'>
        <h3>Lista aut</h3>
        <ListGroup as="ol" >
          {cars.map((car) =>(

            <ListGroup.Item as="li" key={car.id} action onClick={()=>(alert("ggggg"))} >
                {car.brand} {car.model}, {FUELTYPES[car.fuelType]} 
            </ListGroup.Item>))}  

        </ListGroup>
        </div>
    );
}