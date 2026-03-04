import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserInfo } from './dialog-edit-user-info';

describe('EditUserInfo', () => {
  let component: EditUserInfo;
  let fixture: ComponentFixture<EditUserInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
