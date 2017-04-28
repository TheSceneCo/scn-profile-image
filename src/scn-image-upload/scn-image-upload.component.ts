import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';
import { ImagesService, Image as Img } from '@thescene/thescene-api-library';
import { Cropper } from './model/cropper';
import { ImageUploadSettings } from './model/image-upload-settings';


@Component({
  selector: 'scn-image-upload',
  templateUrl: './scn-image-upload.component.html',
  styleUrls: ['./scn-image-upload.component.scss'],
})
export class ScnImageUploadComponent implements OnInit {
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  cropperData: Cropper;
  cropperSettings: CropperSettings;

  @Input() imageUploadSettings: ImageUploadSettings = new ImageUploadSettings();
  @Output() onChangeImage: EventEmitter<Img> = new EventEmitter();

  constructor(private imagesService: ImagesService) {
    this.cropperSettings = this.imageUploadSettings;
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.croppedWidth = 500;
    this.cropperSettings.croppedHeight = 500;
    // this.cropperSettings.width = 100;
    // this.cropperSettings.height = 100;
    this.cropperSettings.canvasWidth = 300;
    this.cropperSettings.canvasHeight = 300;
    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(0,0,0,0.2)';
    // this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
    this.cropperSettings.cropperClass = 'my-cropper';
    this.cropperData = new Cropper();
  }

  ngOnInit() {
    this.cropperSettings.rounded = this.imageUploadSettings.rounded;
  }

  fileChangeListener($event: any) {
    const image: any = new Image();
    const file: File = $event.target.files[0];
    this.cropperData.file = file;
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  }

  save() {
    this.imagesService.uploadImage(this.cropperData.file.name, this.cropperData.image).subscribe(res => {
      this.onChangeImage.emit(res._embedded.imageMetaInfoes[0]);
    });
  }
}
