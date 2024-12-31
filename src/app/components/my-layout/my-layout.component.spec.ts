import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLayoutComponent } from './my-layout.component';

describe('MyLayoutComponent', () => {
  let component: MyLayoutComponent;
  let fixture: ComponentFixture<MyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
