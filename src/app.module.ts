import { Module } from '@nestjs/common';
import { ExampleModule } from './modules/example/projects.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule, ExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
