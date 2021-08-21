import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistdetailComponent } from './artistdetail.component';

describe('ArtistdetailComponent', () => {
  let component: ArtistdetailComponent;
  let fixture: ComponentFixture<ArtistdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
