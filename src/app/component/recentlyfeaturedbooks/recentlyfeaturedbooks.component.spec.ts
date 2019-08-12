import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyfeaturedbooksComponent } from './recentlyfeaturedbooks.component';

describe('RecentlyfeaturedbooksComponent', () => {
  let component: RecentlyfeaturedbooksComponent;
  let fixture: ComponentFixture<RecentlyfeaturedbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyfeaturedbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyfeaturedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
