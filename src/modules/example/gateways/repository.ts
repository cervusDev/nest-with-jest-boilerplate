import { Example } from '../https/entities/example.entity';
import { Repository } from 'src/common/interfaces/repository';

export abstract class IExampleRepository extends Repository<Example> {
  public abstract method(): Promise<Example[]>;
}
