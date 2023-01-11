import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TasksService } from 'src/tasks/tasks.service';
import { UsersService } from 'src/users/users.service';
import { Task } from 'src/tasks/models/task.model';
import { CreateTaskArgs } from 'src/tasks/dto/create-task.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user';
import { User } from 'src/users/models/user.model';

@Resolver(() => Task)
export class TasksResolver {
  constructor(
    private tasksService: TasksService,
    private usersService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Task])
  async findOwnTasks(@CurrentUser() user: User) {
    return this.tasksService.tasks({ authorId: user.id });
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Task)
  async createOwnTask(@Args() args: CreateTaskArgs, @CurrentUser() user: User) {
    return this.tasksService.create({
      ...args,
      author: { connect: { email: user.email } },
    });
  }

  @ResolveField()
  async author(@Parent() task: Task) {
    return await this.usersService.user({ id: task.authorId });
  }
}
