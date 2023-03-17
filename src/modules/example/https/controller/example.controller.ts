import { Controller, Get } from '@nestjs/common';
import { FindAllExampleUseCase } from 'src/modules/example/usecases/find_all/find_all_example.usecase';

@Controller('examples')
export class ExampleController {
  constructor(private readonly findAllService: FindAllExampleUseCase) {}

  @Get()
  public async findAll() {
    return this.findAllService.execute();
  }
}
