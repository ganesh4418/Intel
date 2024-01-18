import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchResponseComponent } from './research-response.component';

describe('ResearchResponseComponent', () => {
  let component: ResearchResponseComponent;
  let fixture: ComponentFixture<ResearchResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchResponseComponent]
    });
    fixture = TestBed.createComponent(ResearchResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
