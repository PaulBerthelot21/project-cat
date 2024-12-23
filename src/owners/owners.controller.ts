import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { Owner } from './interfaces/owner.interface';
import { OwnersService } from './owners.service';

@Controller('owners')
export class OwnersController {
    constructor(private readonly ownersService: OwnersService) {}

    @Post()
    create(@Body() createOwnerDto: CreateOwnerDto): Owner {
        return this.ownersService.create(createOwnerDto);
    }

    @Get()
    findAll(): Owner[] {
        return this.ownersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Owner {
        return this.ownersService.findOne(id);
    }
}
