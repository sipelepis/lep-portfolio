import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contactForm: FormGroup;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";
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
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstnameValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      lastnameValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      emailValidator: ['', [Validators.required, Validators.email]],
      subjectValidator: ['', [Validators.required]],
      messageValidator: ['', [Validators.required]]
    });
  }
  submitForm() {
    const message = `My name is ${this.firstName}`
    alert(message)
  }
}
