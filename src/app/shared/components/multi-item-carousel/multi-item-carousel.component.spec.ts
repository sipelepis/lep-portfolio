import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemCarouselComponent } from './multi-item-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MultiItemCarouselComponent', () => {
  let component: MultiItemCarouselComponent;
  let fixture: ComponentFixture<MultiItemCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[CarouselModule, BrowserAnimationsModule],
      declarations: [MultiItemCarouselComponent]
    });
    fixture = TestBed.createComponent(MultiItemCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
