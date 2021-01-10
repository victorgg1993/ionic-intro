import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NavBar } from "./navbar.page";

const routes: Routes = [
  {
    path: "tabs",
    component: NavBar,
    children: [
      {
        path: "photo-album",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pagines/photo-album/photo-album.module").then(
                (m) => m.PhotoAlbumPageModule
              ),
          },
        ],
      },
      {
        path: "blog",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pagines/blog/blog.module").then(
                (m) => m.BlogPageModule
              ),
          },
        ],
      },
      {
        path: "nba-champions",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pagines/nba-champions/nba-champions.module").then(
                (m) => m.NbaChampionsPageModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: "",
    redirectTo: "tabs/photo-album",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavBarRoutingModule {}
