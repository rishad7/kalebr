import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticreviewsofabookComponent } from './criticreviewsofabook.component';

describe('CriticreviewsofabookComponent', () => {
  let component: CriticreviewsofabookComponent;
  let fixture: ComponentFixture<CriticreviewsofabookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticreviewsofabookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticreviewsofabookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
