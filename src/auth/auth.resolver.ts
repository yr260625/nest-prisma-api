import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { LoginResponse } from 'src/auth/dto/login-response';
import { LoginUserInput } from 'src/auth/dto/login-user.args';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(@Args() loginUserInput: LoginUserInput, @Context() context) {
    console.log('AuthResolver.login');
    return this.authService.login(context.user);
  }
}
