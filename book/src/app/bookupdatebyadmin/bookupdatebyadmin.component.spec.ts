import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookupdatebyadminComponent } from './bookupdatebyadmin.component';

describe('BookupdatebyadminComponent', () => {
  let component: BookupdatebyadminComponent;
  let fixture: ComponentFixture<BookupdatebyadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookupdatebyadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookupdatebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
