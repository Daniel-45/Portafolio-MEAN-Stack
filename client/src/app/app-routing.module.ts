import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'crear-proyecto', component: CreateProjectComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'proyecto/:id', component: DetailsComponent },
  { path: 'editar-proyecto/:id', component: EditComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
