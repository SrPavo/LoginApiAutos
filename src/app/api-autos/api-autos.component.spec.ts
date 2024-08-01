import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAutosComponent } from './api-autos.component';

describe('ApiAutosComponent', () => {
  let component: ApiAutosComponent;
  let fixture: ComponentFixture<ApiAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiAutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
