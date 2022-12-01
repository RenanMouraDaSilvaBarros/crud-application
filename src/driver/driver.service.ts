import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriverService {
  constructor(
    @Inject('DRIVER_REPOSITORY')
    private driverRepository: Repository<Driver>,
  ) {}

  create(createDriverDto: CreateDriverDto) {
    return this.driverRepository.save(createDriverDto);
  }

  findAll() {
    return this.driverRepository.find();
  }

  findOne(id: number) {
    return this.driverRepository.findOne({ where: { id } });
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    return this.driverRepository.update(id, updateDriverDto);
  }

  remove(id: number) {
    return this.driverRepository.delete(id);
  }
}
