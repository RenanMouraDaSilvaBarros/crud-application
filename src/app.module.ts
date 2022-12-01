import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [DriverModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
