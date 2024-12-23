import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { OwnersService } from './owners/owners.service';
import { OwnersController } from './owners/owners.controller';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [CatsModule, OwnersModule],
  controllers: [AppController, CatsController, OwnersController],
  providers: [AppService, CatsService, OwnersService],
})
export class AppModule {}
