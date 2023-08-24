import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { EmailService } from '../email.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('slideInFromBottom', [
      state('void', style({ opacity: 0,transform: 'translateY(100%)' })),
      state('*', style({opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', animate('2000ms ease-out')),
    ]),
  ]
})
export class ContactsComponent {
  contactForm: FormGroup;

  ngOnInit(): void{

  }
  checkSubject(){
    return (this.contactForm.get('subjectValidator')?.hasError('required')) ? "Subject must have a value" :"";
  }
  checkMessage(){
    return (this.contactForm.get('messageValidator')?.hasError('required')) ? "Message must have a value" :"";
  }
  checkName(inputName: string){
    if(this.contactForm.get(inputName)?.hasError('required')){
      return (inputName === "firstnameValidator" ? "First name must have a value" : "Last name must have a value");
    }
    return this.contactForm.get(inputName)?.hasError('pattern') ? (inputName === "firstnameValidator" ? `Not a valid First Name` : `Not a valid Last Name`) : '';
  }
  checkEmail(){
    if (this.contactForm.get('emailValidator')?.hasError('required')){
      return 'You must enter a value';
    }
    return this.contactForm.get('emailValidator')?.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private formBuilder: FormBuilder, private sendEmail: EmailService) {
    this.contactForm = this.formBuilder.group({
      firstnameValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      lastnameValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      emailValidator: ['', [Validators.required, Validators.email]],
      subjectValidator: ['', [Validators.required]],
      messageValidator: ['', [Validators.required]]
    });
  }
  submitForm() {
    this.sendEmail.send(this.contactForm);
  }
}
