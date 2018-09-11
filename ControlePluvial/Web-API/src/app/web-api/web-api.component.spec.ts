/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebApiComponent } from './web-api.component';

describe('WebApiComponent', () => {
  let component: WebApiComponent;
  let fixture: ComponentFixture<WebApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
