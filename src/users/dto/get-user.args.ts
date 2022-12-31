import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUserArgs {
  @Field(() => Int)
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  email: string;
}
