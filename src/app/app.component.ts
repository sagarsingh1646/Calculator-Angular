import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public number1:number;
  public number2:number;
  public number3:number=1;
  public number4:number;
  
  add(){
    this.number3=this.number1+this.number2; 
  } 

  sub(){
    this.number3=this.number1-this.number2; 
  }

  mul(){
    this.number3=this.number1*this.number2; 
  }

  div(){
    this.number3=this.number1/this.number2; 
  }

  fac(){
    for (let p = 1; p <= this.number1; p++) {
      this.number3 = this.number3 * p;
  }
  }
    prime(){
    let n = 0;
    let  i, flag = true;
    for (i = 2; i < this.number1; i++) {
        if (this.number1% i == 0) {
            flag = false;
            break;
        }
    }
    if (flag === true) {
        this.number4= 1;
    } else {
      this.number4= 0;
    }
  }

}
