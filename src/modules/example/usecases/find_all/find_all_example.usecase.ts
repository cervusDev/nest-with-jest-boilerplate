import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/common/interfaces/usecase';
import { ExamplePrismaRepository } from 'src/modules/example/gateways/prisma/example.prisma.repository';

@Injectable()
export class FindAllExampleUseCase implements UseCase<any, any> {
  constructor(private readonly repository: ExamplePrismaRepository) {}
  public execute(): Promise<any> {
    return this.repository.method();
  }
}
