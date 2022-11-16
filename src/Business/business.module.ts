import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamModule } from 'src/team/team.module';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { Business, BusinessSchema } from './model/business.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Business.name, schema: BusinessSchema },
    ]),
    TeamModule,
  ],
  providers: [BusinessService],
  exports: [BusinessService],
  controllers: [BusinessController],
})
export class BusinessModule {}
