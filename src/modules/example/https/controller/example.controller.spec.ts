import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from './example.controller';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { FindAllExampleUseCase } from '../../usecases/find_all/find_all_example.usecase';
import { ExamplePrismaRepository } from '../../gateways/prisma/example.prisma.repository';

describe('example controller', () => {
  let controller: ExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [
        PrismaService,
        FindAllExampleUseCase,
        ExamplePrismaRepository,
      ],
    }).compile();

    controller = module.get<ExampleController>(ExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
