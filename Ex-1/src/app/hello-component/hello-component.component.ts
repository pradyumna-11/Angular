import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  standalone: true,
  imports: [],
  templateUrl: './hello-component.component.html',
  styleUrl: './hello-component.component.css'
})
export class HelloComponentComponent {
  name = "hello";
  changeName(){
    if(this.name==="hello world"){
      this.name = "hello";
    }else{
      this.name = "hello world";
    }
    
  }

}
