import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FileUpload } from '../models/FileUpload';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-upload-item',
  templateUrl: './upload-item.component.html',
  styleUrls: ['./upload-item.component.scss']
})
export class UploadItemComponent implements OnInit {

  itemValue = '';
  // items: Observable<any[]>;
  items:{}[];
  selectedFiles: FileList;
  currentUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  
  constructor(public db: AngularFireDatabase, private fileUS : UploadFileService) {
    db.list('menu').valueChanges().subscribe(res => {
              console.log(res)//should give you the array of percentage. 
              this.items = res;
          });
    }
    ngOnInit() {
    } 

    detectFiles(event) {
      this.selectedFiles = event.target.files;
    }

    uploadSingle() {
      let file = this.selectedFiles.item(0)
      this.currentUpload = new FileUpload(file);
      this.fileUS.pushFileToStorage(this.currentUpload, this.progress);
    }


    onSubmit() {
      this.db.list('/orders').push({ content: this.itemValue });
      this.itemValue = '';
    }
}
