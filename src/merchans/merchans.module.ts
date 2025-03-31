import { Module } from '@nestjs/common';
import { MerchansService } from './merchans.service';
import { MerchansController } from './merchans.controller';

@Module({
  controllers: [MerchansController],
  providers: [MerchansService],
})
export class MerchansModule {}
