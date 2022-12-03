import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsColComponent } from './news-col.component';

describe('NewsColComponent', () => {
  let component: NewsColComponent;
  let fixture: ComponentFixture<NewsColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsColComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
