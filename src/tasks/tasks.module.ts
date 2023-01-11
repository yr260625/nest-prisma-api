import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';

@Module({
  providers: [TasksService, TasksResolver, PrismaService, UsersService],
})
export class TasksModule {}
