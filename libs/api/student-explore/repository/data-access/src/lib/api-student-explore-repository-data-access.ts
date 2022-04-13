import { Injectable } from '@nestjs/common';
//import { Student } from './student.model';

import { ApiStudentExplore } from '@graduates/api/student-explore/api/shared/data-access';

import { PrismaService } from './prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class StudentExploreRepository {
  constructor(private prisma: PrismaService) {}

  async initStudents() {

    const students = await this.prisma.user.findMany();

    let studentArr = [];

    let tempStudentObj;

    let studentObjTags;
    let studentObjProfile;


    for (let i = 0; i < students.length; i++) {
      tempStudentObj = new ApiStudentExplore();

      //Student Number
      tempStudentObj.StudentNumber = students[i].id;

      //Student Name
      tempStudentObj.StudentName = students[i].name;

      //Student Tag
      studentObjTags = await this.prisma.userTag.findUnique({
        where: { userId : students[i].id, },
      });

      tempStudentObj.StudentTags = studentObjTags.tag;

      //Student Bio
      studentObjProfile = await this.prisma.userProfile.findUnique({
        where: { userId : students[i].id, },
      });

      tempStudentObj.StudentBio = studentObjProfile.bio;

      //StudentProfilePicture

      studentArr.push(tempStudentObj);
    }



    return studentArr;

  }

  async searchStudentsByTag(tag: string): Promise<ApiStudentExplore[] | null> {
    let studentArr = [];

    let tempStudentObj;

    let studentObjTags;
    let studentObjProfile;

    if(true){
      tempStudentObj = new ApiStudentExplore();
      tempStudentObj.StudentName = tag;
      studentArr.push(tempStudentObj);
    }
    else{
      const students = await this.prisma.user.findMany({
        // where: {
        //   tags: {
        //     some: {
        //       tag: tag,
        //     },
        //   },
        // },
      });

      for (let i = 0; i < students.length; i++) {
        tempStudentObj = new ApiStudentExplore();

        //Student Name

        studentArr.push(tempStudentObj);
      }
    }
    return studentArr;
  }
}
