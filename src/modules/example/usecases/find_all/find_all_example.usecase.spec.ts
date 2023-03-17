import { Test, TestingModule } from '@nestjs/testing';
import { FindAllExampleUseCase } from './find_all_example.usecase';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { ExamplePrismaRepository } from '../../gateways/prisma/example.prisma.repository';

describe('find all usecases', () => {
  let service: FindAllExampleUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        FindAllExampleUseCase,
        ExamplePrismaRepository,
      ],
    }).compile();

    service = module.get<FindAllExampleUseCase>(FindAllExampleUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
