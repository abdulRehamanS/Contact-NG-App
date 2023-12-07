import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  delmsg: string = '';

  constructor(
    private service :ContactService,

    private router :Router
  ) {}

  ngOnInit(): void {
  this.getContacts();
  }

  getContacts(){
    this.service.getContacts().subscribe(response => {
      this.contacts = response;
    });
  }

  editContact(id:number){
    this.router.navigate(['/edit', id]);
  }

  deleteContact(id:number){
    this.service.deleteContactByid(id).subscribe(response => {
        this.delmsg = response;
        this.getContacts();
    });
    
  }
}
