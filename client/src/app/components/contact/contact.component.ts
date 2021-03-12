import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  public title: string;
  public contact: Contact;
  public status: string;

  constructor(
    private contactService: ContactService,
  ) {
    this.title = 'FORMULARIO DE CONTACTO';
    this.contact = new Contact('', '', '', new Date(), '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.contactService.saveContact(this.contact).subscribe (
      response => {
        if (response.contact) {
          console.log(response);
          this.status = 'success';
          form.reset();
        }
        else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error as any);
      }
    );
  }
}
