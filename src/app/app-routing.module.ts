import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'user-profile',
    loadChildren: './user-profile/user-profile.module#UserProfilePageModule'
  },
  // {
  //   path: 'user-profile',
  //   loadChildren: './user-profile/user-profile.module#UserProfileModule'
  // },
  // {
  //   path: 'rsvp',
  //   loadChildren: './rsvp/rsvp.module#RsvpPageModule'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
