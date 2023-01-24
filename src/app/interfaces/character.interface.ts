import Origin from "./origin.interface";

export default interface Character{
    id:number;
    name: string;
    species: string;
    image: string;
    status: string;
    gender: string;
    origin: Origin
}