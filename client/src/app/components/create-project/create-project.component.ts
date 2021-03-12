import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global-setting';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateProjectComponent implements OnInit {

  public title: string;
  public project: Project;  // Objeto de tipo Project
  public saveProject: any;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService
  ) {
    this.title = 'CREAR NUEVO PROYECTO';
    this.project = new Project('', '', '', '', '', '', 2020, '');
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    // Le paso el objeto a guardar (this.project)
    // El método 'subscribe' permite recoger lo que devuelve la API REST
    // Tiene dos funciones de callback (response y error)
    // Guardar los datos
    this.projectService.saveProject(this.project).subscribe (
      response => {
        if (response.project) {
          console.log(response);
          if (this.filesToUpload) {
            // Subir la imagen
            this.uploadService
              .makeFileRequest(Global.url + 'upload-image/'
                + response.project._id, [], this.filesToUpload, 'image')
              .then((resultado: any) => {
                this.saveProject = response.project._id;
                console.log(resultado);
                this.status = 'success';
                form.reset();
              });
          }
          else {
            this.saveProject = response.project._id;
            this.status = 'success';
            form.reset();
          }
        }
        else {
          this.status = 'failed';
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
