import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdrateComponent } from './usdrate.component';

describe('UsdrateComponent', () => {
  let component: UsdrateComponent;
  let fixture: ComponentFixture<UsdrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsdrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsdrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
