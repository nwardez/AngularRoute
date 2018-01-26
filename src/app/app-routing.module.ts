import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { TodoService } from './todo.service';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { TodoCompComponent } from './todo-comp/todo-comp.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { CreditsComponent } from './credits/credits.component';

import { RouterModule, Routes } from '@angular/router';

// Déclaration des differents chemins d'accès pour accéder aux pages en particulier
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'todo-comp', component: TodoCompComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'legal', component: LegalNoticeComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    RouterModule.forRoot(routes,{enableTracing:true})
  ]
})
export class AppRoutingModule { }
