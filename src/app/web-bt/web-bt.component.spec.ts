import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBTComponent } from './web-bt.component';

describe('WebBTComponent', () => {
  let component: WebBTComponent;
  let fixture: ComponentFixture<WebBTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebBTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
