/* eslint-disable prettier/prettier */
/* import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} */



import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './poll/poll.entity';
import { PollService } from './poll/poll.service';
import { PollController } from './poll/poll.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'cardio_user',
      password: 'cardio_password',
      database: 'cardio_db',
      entities: [Poll],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Poll]),
  ],
  providers: [PollService],
  controllers: [PollController],
})
export class AppModule {}



