import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServerComponentComponent } from './delete-server-component.component';

describe('DeleteServerComponentComponent', () => {
  let component: DeleteServerComponentComponent;
  let fixture: ComponentFixture<DeleteServerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteServerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
