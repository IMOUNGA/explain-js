import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgExplainComponent } from './ng-explain.component';

describe('NgExplainComponent', () => {
  let component: NgExplainComponent;
  let fixture: ComponentFixture<NgExplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgExplainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgExplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
