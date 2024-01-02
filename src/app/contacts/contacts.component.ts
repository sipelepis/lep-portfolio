import { Component, OnInit,Input } from '@angular/core';
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
  constructor(private formBuilder: FormBuilder, private sendEmail: EmailService) {
    this.contactForm = this.formBuilder.group({
      firstnameValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      lastnameValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      emailValidator: ['', [Validators.required, Validators.email]],
      subjectValidator: ['', [Validators.required]],
      messageValidator: ['', [Validators.required]]
    });
  }
  ngOnInit(): void{

  }
  checkFormControl(controlName: string, errorType: string, errorMessage: string) {
    return this.contactForm.get(controlName)?.hasError(errorType) ? errorMessage : "";
  }
  checkSubject() {
    return this.checkFormControl('subjectValidator', 'required', 'Subject must have a value');
  }
  checkMessage() {
    return this.checkFormControl('messageValidator', 'required', 'Message must have a value');
  }
  checkName(inputName: string) {
    return this.checkFormControl(inputName, 'required', 'Name must have a value');
  }
  checkEmail(){
    if (this.contactForm.get('emailValidator')?.hasError('required')){
      return 'You must enter a value';
    }
    return this.contactForm.get('emailValidator')?.hasError('email') ? 'Not a valid email' : '';
  }
  submitForm() {
    this.sendEmail.send(this.contactForm);
  }
}
