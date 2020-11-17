import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormItemComponent } from './add-form-item.component';

describe('AddFormItemComponent', () => {
  let component: AddFormItemComponent;
  let fixture: ComponentFixture<AddFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
