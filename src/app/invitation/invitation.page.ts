import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: 'invitation.page.html',
  styleUrls: ['invitation.page.scss'],
})
export class InvitationPage implements OnInit {
  elementType = 'url';
  value = 'https://lh3.googleusercontent.com/-mhQgcSm0SOI/AAAAAAAAAAI/AAAAAAAALIc/J07-NAniDi0/photo.jpg';
  testUrl = '/assets/images/invite_sample.jpg'

  constructor() {}
  ngOnInit() {}

  public captureScreen() {
      // should convert to html to pdf
      const data = document.getElementById('invitation-content');
  }

}
