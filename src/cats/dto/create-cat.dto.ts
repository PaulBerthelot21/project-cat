import { IsString, IsInt, Min } from 'class-validator';
import { Owner } from 'src/owners/interfaces/owner.interface';

export class CreateCatDto {
    @IsString()
    name: string;

    @IsInt()
    @Min(0)
    age: number;

    @IsString()
    breed: string;

    owner: Owner;
}