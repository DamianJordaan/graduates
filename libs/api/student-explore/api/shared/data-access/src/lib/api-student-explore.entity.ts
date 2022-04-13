import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiStudentExplore {
  @Field(() => ID)
  StudentNumber!: string;

  @Field()
  StudentName: string;

  @Field()
  StudentBio: string;

  @Field()
  StudentPic: string;

  @Field()
  StudentTags: string;
}
