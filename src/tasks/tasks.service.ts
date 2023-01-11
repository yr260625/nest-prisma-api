import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async tasks(data: Prisma.TaskWhereInput): Promise<Task[]> {
    return this.prisma.task.findMany({ where: data });
  }

  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data: {
        title: data.title,
        content: data.content,
        finished: data.finished,
        author: data.author,
      },
    });
  }
}
