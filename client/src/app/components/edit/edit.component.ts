import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global-setting';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Template URL reutilizar la visat del formulario para crear proyecto
@Component({
  selector: 'app-edit',
  templateUrl: '../create-project/create-project.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;  // Objeto de tipo Project
  public saveProject: any;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.title = 'ACTUALIZAR PROYECTO';
    this.url = Global.url;
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

  onSubmit(form: any) {
    // Le paso el objeto a guardar (this.project)
    // El método 'subscribe' permite recoger lo que devuelve la API REST
    // Tiene dos funciones de callback (response y error)
    // Guardar los datos
    this.projectService.updateProject(this.project).subscribe(
      response => {
        if (response.project) {

          if (this.filesToUpload) {
            // Subir la imagen
            this.uploadService
              .makeFileRequest(Global.url + 'upload-image/'
                + response.project._id, [], this.filesToUpload, 'image')
              .then((resultado: any) => {
                this.saveProject = response.project._id;
                console.log(resultado);
                this.status = 'exito';
              });
          }
          else {
            this.saveProject = response.project._id;
            this.status = 'exito';
          }
        }
        else {
          this.status = 'fallo';
        }
      },
      error => {
        console.log(error as any);
      }
    );
    console.log(this.project);
  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput);
    // Hacer un casting para que sea un array de tipo File
    this.filesToUpload = (fileInput.target.files as Array<File>);
  }

}
