import { ApiStudentExplore } from '@graduates/api/student-explore/api/shared/data-access';
import { ApiStudentExploreServiceFeatureModule } from '@graduates/api/student-explore/service/feature';
import { Query, Resolver } from '@nestjs/graphql';
@Resolver(() => ApiStudentExplore)
export class ApiStudentExploreResolver {
  constructor(private studentExploreService: ApiStudentExploreServiceFeatureModule) {}

  @Query(() => [ApiStudentExplore])
  studentExplore(): Promise<ApiStudentExplore[]> {
    return this.studentExploreService.get_all();
  }
}