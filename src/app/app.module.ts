import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [AppComponent, CreateContactComponent, ContactListComponent, ContactEditComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
