import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBarComponent } from './modal-bar.component';

describe('ModalBarComponent', () => {
  let component: ModalBarComponent;
  let fixture: ComponentFixture<ModalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
