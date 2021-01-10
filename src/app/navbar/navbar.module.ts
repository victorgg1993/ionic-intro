import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NavBarRoutingModule } from "./navbar-routing.module";
import { NavBar } from "./navbar.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NavBarRoutingModule],
  declarations: [NavBar],
})
export class NavBarModule {}
