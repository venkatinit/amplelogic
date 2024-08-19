import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationProcessComponent } from './migration-process.component';

describe('MigrationProcessComponent', () => {
  let component: MigrationProcessComponent;
  let fixture: ComponentFixture<MigrationProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MigrationProcessComponent]
    });
    fixture = TestBed.createComponent(MigrationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
