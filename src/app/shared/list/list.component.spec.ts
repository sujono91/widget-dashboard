import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    spyOn(component.addChart, 'emit');
    spyOn(component.removeChart, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit add chart successfully', () => {
    component.add('confidentiality');
    fixture.detectChanges();
    expect(component.addChart.emit).toHaveBeenCalled();
  });

  it('should emit add chart successfully', () => {
    component.remove('confidentiality');
    fixture.detectChanges();
    expect(component.removeChart.emit).toHaveBeenCalled();
  });
});
