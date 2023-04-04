import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RestaurantesModule } from './restaurantes/restaurantes.module';
import { PratosModule } from './pratos/pratos.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, RestaurantesModule, PratosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
