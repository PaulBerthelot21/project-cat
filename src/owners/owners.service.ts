import { Injectable, NotFoundException } from '@nestjs/common';
import { Owner } from './interfaces/owner.interface';
import { CreateOwnerDto } from './dto/create-owner.dto';

@Injectable()
export class OwnersService {
    private owners: Owner[] = [];
    private currentId = 1;

    create(createOwnerDto: CreateOwnerDto): Owner {
        const owner: Owner = {
            id: this.currentId++,
            name: createOwnerDto.name,
        };
        this.owners.push(owner);
        return owner;
    }

    findAll(): Owner[] {
        return this.owners;
    }

    findOne(id: number): Owner {
        const owner = this.owners.find(owner => owner.id === id);
        if (!owner) {
            throw new NotFoundException(`Owner with ID ${id} not found`);
        }
        return owner;
    }
}
