import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global-setting';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ProjectService]
})
export class DetailsComponent implements OnInit {

  public url: string;
  public project: Project;
  public title: string;
  public subtitle: string;
  public web: string;
  public email: string;
  public confirm: boolean; // Para confirmación al eliminar un proyecto

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.title = 'Daniel Pompa Pareja';
    this.subtitle = 'Desarrollador Full Stack';
    this.web = 'danielweb.es';
    this.email = 'daniel@gmail.com';
    this.confirm = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.getProject(id);
    });
  }

  getProject(id: string) {
    // Invocar al método del servicio
    this.projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
        console.log(this.project);
      },
      error => {
        console.log(error as any);
      }
    );
  }

  setConfirm(confirm: boolean) {
    this.confirm = confirm;
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe(
      response => {
        if (response.project) {
          this.router.navigateByUrl('/proyectos');
        }
      },
      error => {
        console.log(error as any);
      }
    );
  }

}
