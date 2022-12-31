import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;
  @Field({ nullable: false })
  email: string;
  @Field()
  name: string;
  @Field({ nullable: false })
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
