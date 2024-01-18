import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectUsComponent } from './connect-us.component';

describe('ConnectUsComponent', () => {
  let component: ConnectUsComponent;
  let fixture: ComponentFixture<ConnectUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectUsComponent]
    });
    fixture = TestBed.createComponent(ConnectUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
