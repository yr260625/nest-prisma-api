import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class LoginUserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
