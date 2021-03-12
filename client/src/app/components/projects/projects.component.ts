import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global-setting';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public url: string;
  public projects: Project[];

  constructor(
    private projectService: ProjectService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  // Utilizar el método 'getProjects' del servicio 'projectService'
  // Para que funcione hay que llamar a este método en el método 'onInit'
  // Método 'subscribe' para recoger la respuesta de mí API
  getProjects() {
    this.projectService.getProjects().subscribe(
      response => {
        if (response.projects) {
          this.projects = response.projects;
        }
        console.log(response);
      },
      error => {
        console.log(error as any);
      }
    );
  }

}
