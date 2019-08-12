import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksfeaturedintvshowsComponent } from './booksfeaturedintvshows.component';

describe('BooksfeaturedintvshowsComponent', () => {
  let component: BooksfeaturedintvshowsComponent;
  let fixture: ComponentFixture<BooksfeaturedintvshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksfeaturedintvshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksfeaturedintvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
