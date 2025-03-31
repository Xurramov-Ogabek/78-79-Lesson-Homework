import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MerchansService } from './merchans.service';
import { CreateMerchanDto } from './dto/create-merchan.dto';
import { UpdateMerchanDto } from './dto/update-merchan.dto';

@Controller('merchans')
export class MerchansController {
  constructor(private readonly merchansService: MerchansService) {}

  @Post()
  create(@Body() createMerchanDto: CreateMerchanDto) {
    return this.merchansService.create(createMerchanDto);
  }

  @Get()
  findAll() {
    return this.merchansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMerchanDto: UpdateMerchanDto) {
    return this.merchansService.update(+id, updateMerchanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchansService.remove(+id);
  }
}
