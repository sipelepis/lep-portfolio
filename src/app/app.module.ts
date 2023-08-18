import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { ContactsComponent } from './contacts/contacts.component';
// import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ContactsComponent
  ]
})
export class AppModule { }
