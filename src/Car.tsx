export let FUELTYPES=['Petrol','Hybrid','Diesel','LPG'];
export let BODYTYPES= ['Hatchback','Sedan','Kombi','SUV','Roadster' ];
export interface Car{
    id : string,
    brand: string,
    model: string,
    doorsNumber: number,
    luggageCapacity: number,
    engineCapacity: number,
    fuelType : number,//string,
    productionDate: string,
    carFuelConsumption : number,
    bodyType : number //string
}