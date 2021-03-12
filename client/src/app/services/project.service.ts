import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Hacer peticiones AJAX
import { Global } from './global-setting';
import { Observable } from 'rxjs';
import { Project } from '../models/project'; // Modelo

// Decorador - Indicar que es un servicio para inyectar
@Injectable()
export class ProjectService {
    public url: string; // URL de la API

    constructor(
        // tslint:disable-next-line: variable-name
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    testService() {
        return 'Probando el servicio de Angular';
    }

    // Guardar proyecto en la base de datos
    // Hay que indicar que devuelve un Observable
    saveProject(project: Project): Observable<any> {
        // Necesario que sea un JSO String para que la API pueda recogerlo
        const params = JSON.stringify(project);
        // Como se va a enviar la información
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        // Petición por POST para crear el recurso en la API
        // La URL es la configurada en el fichero de configuración global, es la URL de mí API
        // Le paso la ruta 'save-project', el objet 'project' (params) y las cabeceras
        return this._http.post(`${this.url}save-project`, params, { headers });
    }

    // Listar proyectos de la base de datos
    getProjects(): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(`${this.url}get-projects`, { headers });
    }

    // Mostrar detalles de un proyecto
    getProject(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(`${this.url}get-project/${id}`, { headers });
    }

    // Actualizar un projecto
    updateProject(project): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const params = JSON.stringify(project);
        return this._http.put(this.url + 'update-project/' + project._id, params, { headers });
    }

    // Eliminar un proyecto
    deleteProject(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(`${this.url}delete-project/${id}`, { headers });
    }

}
