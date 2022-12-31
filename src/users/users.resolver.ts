import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';
import { hash } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { GetUserArgs } from 'src/users/dto/get-user.args';
import { CreateUserArgs } from 'src/users/dto/create-user.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async user(@Args() args: GetUserArgs) {
    return this.userService.user(args);
  }

  @Mutation(() => User)
  async createUser(@Args() args: CreateUserArgs) {
    const hashedPassword = await hash(args.password, 10);
    return this.userService.createUser({
      email: args.email,
      name: args.name,
      password: hashedPassword,
    });
  }
}
