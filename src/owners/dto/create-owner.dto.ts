import { IsString, IsInt, Min } from 'class-validator';

export class CreateOwnerDto {
    @IsString()
    name: string;
}