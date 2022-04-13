import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { StudentExploreServiceModule } from './api-student-explore-service.module'

import { InitStudentsQuery } from './queries/impl/init-students.query';
import { SearchStudentsByTagQuery } from './queries/impl/search-students-by-tag.query';
import { SearchStudentsQuery } from './queries/impl/search-students.query';
import { FilterStudentsQuery } from './queries/impl/filter-students.query';

@Injectable()
export class StudentExploreService {
  constructor(
     private readonly commandBus: CommandBus,
     private readonly queryBus: QueryBus
   ) {}

  async InitStudents() {
    return this.queryBus.execute(
      new InitStudentsQuery()
    );
  }

  async SearchStudentsByTag(tag: string) {
    return this.queryBus.execute(
      new SearchStudentsByTagQuery(tag)
    );
  }

  async SearchStudents(studentName: string) {
    return this.queryBus.execute(
      new SearchStudentsQuery()
    );
  }

  async FilterStudents() {
    return this.queryBus.execute(
      new FilterStudentsQuery()
    );
  }

}