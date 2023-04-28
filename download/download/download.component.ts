import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DownloadserviceService } from '../downloadservice.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  fileInfos?: Observable<any>;

  constructor(private downloadservice: DownloadserviceService) { }

  ngOnInit(): void {
    this.fileInfos = this.downloadservice.getFiles();
  }

}
