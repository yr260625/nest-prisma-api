import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateTaskArgs {
  @Field(() => String)
  @Field({ nullable: false })
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => Boolean)
  finished?: boolean;
}
