import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsoleDir';
  newPost=' No Content';
  onAddPost(postInput: HTMLTextAreaElement){
    console.dir(postInput);
    }
    
    
}
