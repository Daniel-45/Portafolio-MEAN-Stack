import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Hacer peticiones AJAX
import { Global } from './global-setting';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact'; // Modelo

// Decorador - Indicar que es un servicio para inyectar
@Injectable()
export class ContactService {
    public url: string; // URL de la API

    constructor(
        // tslint:disable-next-line: variable-name
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    // Guardar proyecto en la base de datos
    // Hay que indicar que devuelve un Observable
    saveContact(contact: Contact): Observable<any> {
        // Necesario que sea un JSO String para que la API pueda recogerlo
        const params = JSON.stringify(contact);
        // Como se va a enviar la información
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        // Petición por POST para crear el recurso en la API
        // La URL es la configurada en el fichero de configuración global, es la URL de mí API
        // Le paso la ruta 'save-project', el objet 'project' (params) y las cabeceras
        return this._http.post(`${this.url}save-contact`, params, { headers });
    }
}
