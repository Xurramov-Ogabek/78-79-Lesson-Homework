import { Injectable } from '@nestjs/common';
import { CreateMerchanDto } from './dto/create-merchan.dto';
import { UpdateMerchanDto } from './dto/update-merchan.dto';

@Injectable()
export class MerchansService {
  create(createMerchanDto: CreateMerchanDto) {
    return 'This action adds a new merchan';
  }

  findAll() {
    return `This action returns all merchans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchan`;
  }

  update(id: number, updateMerchanDto: UpdateMerchanDto) {
    return `This action updates a #${id} merchan`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchan`;
  }
}
