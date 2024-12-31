import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavItemsComponent } from './my-nav-items.component';

describe('MyNavItemsComponent', () => {
  let component: MyNavItemsComponent;
  let fixture: ComponentFixture<MyNavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNavItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
