import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';
import { HttpClientModule } from '@angular/common/http';
describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
