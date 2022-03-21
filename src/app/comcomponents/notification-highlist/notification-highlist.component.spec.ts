import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationHighlistComponent } from './notification-highlist.component';

describe('NotificationHighlistComponent', () => {
  let component: NotificationHighlistComponent;
  let fixture: ComponentFixture<NotificationHighlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationHighlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationHighlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
