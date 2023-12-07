import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpclient: HttpClient) {}

  private baseUrl = 'http://localhost:2020/';

  createContact(contact: Contact): Observable<string> {
    return this.httpclient.post(`${this.baseUrl}/add`, contact, {
      responseType: 'text',
    });
  }
  getContacts(): Observable<Contact[]> {
    return this.httpclient.get<Contact[]>(`${this.baseUrl}/getAllContacts`);
  }

  findContactById(id: number): Observable<Contact> {
    return this.httpclient.get<Contact>(`${this.baseUrl}/contacts/${id}`);
  }

  deleteContactByid(id: number): Observable<string> {
    return this.httpclient.delete(`${this.baseUrl}/contacts/${id}`, {
      responseType: 'text',
    });
  }
}
