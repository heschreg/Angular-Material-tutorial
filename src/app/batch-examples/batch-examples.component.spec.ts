import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchExamplesComponent } from './batch-examples.component';

describe('BatchExamplesComponent', () => {
  let component: BatchExamplesComponent;
  let fixture: ComponentFixture<BatchExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
