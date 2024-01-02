import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = ""
  form: FormGroup = this.fb.group({
    from_name: "",
    to_name: "admin",
    from_email: "",
    subject: "",
    message: "",
  })
  constructor(private http: HttpClient, private fb: FormBuilder, private _snackBar: MatSnackBar) {}
  async send(contactForm: FormGroup){
    emailjs.init('nXnP-BsB-OLcNNRET');
    let response = await emailjs.send("service_esjdngk","template_98r5llz",{
      from_name: contactForm.controls['firstnameValidator'].value +  " " + contactForm.controls["lastnameValidator"].value,
      to_name: "Phillip Jan Moran",
      from_email: contactForm.controls["emailValidator"].value,
      subject: contactForm.controls["subjectValidator"].value,
      message: contactForm.controls["messageValidator"].value,
    });
    this._snackBar.open("Message Successfully Sent!", "", {duration: 3000})
  }
}
