import { Component, OnInit } from '@angular/core';
import { Image, OAuth2Service } from '@thescene/thescene-api-library';
import { ImageUploadSettings } from '../../../../src/scn-image-upload/model/image-upload-settings';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  uploadImgLink: string;
  imageUploadSettings: ImageUploadSettings = new ImageUploadSettings();

  constructor(private oAuth2Service: OAuth2Service) {
    this.imageUploadSettings.rounded = true;
  }

  ngOnInit() {

  }

  onChangeImage(image: Image) {
    console.log("TEST", image);
    // console.log(this.oAuth2Service.userAccess);
    this.uploadImgLink = `${image._links.image.href}?access_token=${this.oAuth2Service.userAccess.access_token}`;
  // &width=500&height=500
  }

}
