import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StoryComponent } from './story/story.component';
import { CountdownComponent } from './countdown/countdown.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { RsvpComponent } from './rsvp/rsvp.component';

/**
 * NgModule that includes all Material modules that are required to serve 
 * the Plunker.
 */
@NgModule({
  exports: [
    // CDK
    // A11yModule,
    // BidiModule,
    // ObserversModule,
    // OverlayModule,
    // PlatformModule,
    // PortalModule,
    // ScrollDispatchModule,
    // CdkStepperModule,
    // CdkTableModule,
    
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
  ],
  declarations: []
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StoryComponent, 
    CountdownComponent, 
    LocationComponent,
    GalleryComponent, 
    GuestbookComponent, 
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
