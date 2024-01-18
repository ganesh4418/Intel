import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatFormComponent } from './plat-form.component';

describe('PlatFormComponent', () => {
  let component: PlatFormComponent;
  let fixture: ComponentFixture<PlatFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatFormComponent]
    });
    fixture = TestBed.createComponent(PlatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
