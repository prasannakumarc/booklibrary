import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookaddbyadminComponent } from './bookaddbyadmin.component';

describe('BookaddbyadminComponent', () => {
  let component: BookaddbyadminComponent;
  let fixture: ComponentFixture<BookaddbyadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookaddbyadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookaddbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
