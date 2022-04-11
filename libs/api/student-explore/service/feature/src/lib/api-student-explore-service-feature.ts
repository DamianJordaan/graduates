import { ApiStudentExplore } from '@graduates/api/student-explore/api/shared/data-access';
//import { ApiStudentProfilesEntity } from '@graduates/api/student-profiles/api/shared/data-access'
import { Injectable } from '@nestjs/common';
import { ID } from '@nestjs/graphql';

@Injectable()
export class ApiStudentExploreServiceFeatureModule {
  async get_all(): Promise<ApiStudentExplore[]> {
    // const students = [];
    // students.push("u19014725");
    // students.push("u20473509");
    // students.push("u19778932");
    // return students;
    const studentExplore = new ApiStudentExplore();
    studentExplore.studentNumber = "u19014725";
    return [studentExplore];
  }
}