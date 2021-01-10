import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { NavBar } from "./navbar.page";

describe("NavBar", () => {
  let component: NavBar;
  let fixture: ComponentFixture<NavBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBar],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
