import { Owner } from "src/owners/interfaces/owner.interface";

export interface Cat {
    id: number;
    name: string;
    age: number;
    breed: string;
    owner: Owner;
}
