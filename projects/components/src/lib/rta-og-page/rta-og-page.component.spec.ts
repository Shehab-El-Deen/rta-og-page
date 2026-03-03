import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RtaOgPageComponent } from "./rta-og-page.component";

describe("RtaOgPageComponent", () => {
  let component: RtaOgPageComponent;
  let fixture: ComponentFixture<RtaOgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtaOgPageComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtaOgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
