import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRepresentativePageComponent } from './company-representative-page/company-representative-page.component';
import { CompanyRepresentativeAboutComponent } from './company-representative-about/company-representative-about.component';
import { CompanyRepresentativeTitleComponent } from './company-representative-title/company-representative-title.component';
import { CompanyRepresentativeExperienceComponent } from './company-representative-experience/company-representative-experience.component';
import { CompanyRepresentativeConnectionsComponent } from './company-representative-connections/company-representative-connections.component';
import { CompanyRepresentativeContactComponent } from './company-representative-contact/company-representative-contact.component';
import { MatCardModule } from '@angular/material/card';
import { CompanyRepresentativeRoutingModule } from "./company-representative-routing.module";
import { CompanyRepresentativeExploreComponent } from './company-representative-explore/company-representative-explore.component';
import { CompanyRepresentativeMockStudentExplorePageComponent } from './company-representative-mock-student-explore-page/company-representative-mock-student-explore-page.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CompanyRepresentativeRoutingModule
  ],
  declarations: [
    CompanyRepresentativePageComponent,
    CompanyRepresentativeAboutComponent,
    CompanyRepresentativeTitleComponent,
    CompanyRepresentativeExperienceComponent,
    CompanyRepresentativeConnectionsComponent,
    CompanyRepresentativeContactComponent,
    CompanyRepresentativeExploreComponent,
    CompanyRepresentativeMockStudentExplorePageComponent
  ],
  exports : [
    CompanyRepresentativeMockStudentExplorePageComponent,
    CompanyRepresentativePageComponent,
  ]
})
export class ClientCompanyRepresentativeFeatureModule {}
