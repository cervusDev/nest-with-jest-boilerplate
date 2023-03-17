import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { ExampleController } from './https/controller/example.controller';
import { FindAllExampleUseCase } from './usecases/find_all/find_all_example.usecase';
import { ExamplePrismaRepository } from './gateways/prisma/example.prisma.repository';

@Module({
  controllers: [ExampleController],
  providers: [PrismaService, FindAllExampleUseCase, ExamplePrismaRepository],
})
export class ExampleModule {}
