import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: number;
  @Field()
  title: string;
  @Field({ nullable: true })
  content?: string;
  @Field()
  finished: boolean;
  @Field(() => User, { nullable: true })
  author?: User;
  @Field()
  authorId?: number;
}
