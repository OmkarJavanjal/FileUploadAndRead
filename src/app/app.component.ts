import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data;
  public fileContent;

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result;
      self.data = JSON.parse(self.fileContent);
    sessionStorage.setItem('res', JSON.stringify(self.data));
      
    }
    fileReader.readAsText(file);
  }
}
