import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = ""
  constructor(private http: HttpClient) {}
}
