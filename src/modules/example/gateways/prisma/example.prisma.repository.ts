import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { Example } from 'src/modules/example/https/entities/example.entity';
import { IExampleRepository } from 'src/modules/example/gateways/repository';

@Injectable()
export class ExamplePrismaRepository implements IExampleRepository {
  constructor(private readonly prisma: PrismaService) {}
  public method(): Promise<Example[]> {
    throw new Error('Method not implemented.');
  }
  public findAll(): Promise<Example[]> {
    throw new Error('Method not implemented.');
  }
  public count?(): Promise<number> {
    throw new Error('Method not implemented.');
  }
  public create(data: Example): Promise<Example> {
    throw new Error('Method not implemented.');
  }
  public getById(id: number): Promise<Example> {
    throw new Error('Method not implemented.');
  }
  public delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public update(id: number, data: Partial<Example>): Promise<Example> {
    throw new Error('Method not implemented.');
  }
  public createMany?(data: Example[], args?: never): Promise<Example[]> {
    throw new Error('Method not implemented.');
  }
}
