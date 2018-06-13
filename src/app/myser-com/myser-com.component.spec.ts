/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyserComComponent } from './myser-com.component';

describe('MyserComComponent', () => {
  let component: MyserComComponent;
  let fixture: ComponentFixture<MyserComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyserComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyserComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
