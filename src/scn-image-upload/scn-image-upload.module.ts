import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScnImageUploadComponent } from './scn-image-upload.component';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { ImagesService } from '@thescene/thescene-api-library';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    ScnImageUploadComponent,
    ImageCropperComponent
  ],
  exports: [ScnImageUploadComponent],
  providers: [
    ImagesService
  ]
})
export class ScnImageUploadModule {
}
