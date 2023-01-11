import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUserTasksArgs {
  @Field(() => Int)
  @Field({ nullable: true })
  authorId: number;
}
