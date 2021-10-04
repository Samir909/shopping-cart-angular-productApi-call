import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeApiCRUDComponent } from './fake-api-crud.component';

describe('FakeApiCRUDComponent', () => {
  let component: FakeApiCRUDComponent;
  let fixture: ComponentFixture<FakeApiCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeApiCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeApiCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
