import {Directive, Output, Input, EventEmitter, HostBinding, HostListener, ViewChild, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFileupload]'
})
export class FileuploadDirective {

  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') public backgroundColor = 'transparent';
  @HostBinding('style.opacity') public opacity = '1';



  // tslint:disable-next-line:typedef
  @HostListener('dragover', ['$event']) OnDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = '#c0c8c4';
    this.opacity = '0.8';
  }

  // tslint:disable-next-line:typedef
  @HostListener('dragleave', ['$event']) OnDragLeave(event) {
      event.preventDefault();
      event.stopPropagation();
      this.backgroundColor = 'transparent';
      this.opacity = '1';
  }

  // tslint:disable-next-line:typedef
  @HostListener('drop', ['$event']) OnDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.backgroundColor = 'transparent';
      this.opacity = '1';

      const documentList = {
        files: event.dataTransfer.files,
      };

      if (documentList.files.length > 0) {
        this.onFileDropped.emit(documentList);
      }
  }

  constructor() {
  }

}
