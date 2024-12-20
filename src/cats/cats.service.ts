import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(createCatDto: CreateCatDto) {
        const newCat = { id: Date.now(), ...createCatDto };
        this.cats.push(newCat);
        return newCat;
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(id: number) {
        const cat = this.cats.find(cat => cat.id === id);
        if (!cat) {
            throw new NotFoundException(`Chat avec l'ID ${id} non trouvé`);
        }
        return cat;
    }
}
