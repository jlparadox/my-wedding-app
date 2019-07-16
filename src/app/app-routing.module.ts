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
    path: 'calendar-location',
    loadChildren: './calendar-location/calendar-location.module#CalendarLocationPageModule'
  },
  {
    path: 'invitation',
    loadChildren: './invitation/invitation.module#InvitationPageModule'
  },
  {
    path: 'location',
    loadChildren: './location/location.module#LocationPageModule'
  },
  {
    path: 'greetings',
    loadChildren: './greetings/greetings.module#GreetingsPageModule'
  },
  {
    path: 'groom-bride',
    loadChildren: './groom-bride/groom-bride.module#GroomBridePageModule'
  },
  {
    path: 'people',
    loadChildren: './people/people.module#PeoplePageModule'
  },
  {
    path: 'rsvp',
    loadChildren: './rsvp/rsvp.module#RsvpPageModule'
  },
  {
    path: 'story',
    loadChildren: './story/story.module#StoryPageModule'
  },
  {
    path: 'user-profile',
    loadChildren: './user-profile/user-profile.module#UserProfileModule'
  },
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
