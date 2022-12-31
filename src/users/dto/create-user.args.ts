import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateUserArgs {
  @Field({ nullable: false })
  email: string;

  @Field()
  name: string;

  @Field({ nullable: false })
  password: string;
}
