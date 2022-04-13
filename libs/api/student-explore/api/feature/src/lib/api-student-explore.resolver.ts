import { Resolver, Args, Query } from '@nestjs/graphql';
//import { Student } from '@graduates/api/student-explore/repository/data-access';
import { StudentExploreService } from '@graduates/api/student-explore/service/feature';

import { ApiStudentExplore } from '@graduates/api/student-explore/api/shared/data-access';

@Resolver(() => ApiStudentExplore)
export class ApiStudentExploreResolver {
  constructor(private readonly StudentExploreService: StudentExploreService) {}

  @Query(() => [ApiStudentExplore])
  InitStudent(): Promise<ApiStudentExplore>{
    return this.StudentExploreService.InitStudents();
  }

  @Query(() => [ApiStudentExplore])
  SearchStudentsByTag(@Args('tag', { type: () => String }) tag: string) : Promise<ApiStudentExplore>{
    return this.StudentExploreService.SearchStudentsByTag(tag);
  }

  @Query(() => [ApiStudentExplore])
  SearchStudents(@Args('name', { type: () => String }) name: string) : Promise<ApiStudentExplore>{
    return this.StudentExploreService.SearchStudents(name);
  }

  @Query(() => [ApiStudentExplore])
  FilterStudents() : Promise<ApiStudentExplore>{
    return this.StudentExploreService.FilterStudents();
  }


}