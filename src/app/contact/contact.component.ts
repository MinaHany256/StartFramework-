import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  message1(x:any){
    let y = document.getElementById('p1')
    let z =x.target.value
    
    if(x.target.value == ''){
      if(y!=null){
        y.classList.remove('test2')
        y.classList.add('test')
        console.log('empty');
        
      }
    }else if (x.target.value != '') {
      if(y!=null){
      y.classList.remove('test')
        y.classList.add('test2')
        console.log('element');
        
      }
    }
  }
  message2(x:any){
    let y = document.getElementById('p2')
    let z =x.target.value
    
    if(x.target.value == ''){
      if(y!=null){
        y.classList.remove('test2')
        y.classList.add('test')
        console.log('empty');
        
      }
    }else if (x.target.value != '') {
      if(y!=null){
      y.classList.remove('test')
        y.classList.add('test2')
        console.log('element');
        
      }
    }
  }
  message3(x:any){
    let y = document.getElementById('p3')
    let z =x.target.value
    
    if(x.target.value == ''){
      if(y!=null){
        y.classList.remove('test2')
        y.classList.add('test')
        console.log('empty');
        
      }
    }else if (x.target.value != '') {
      if(y!=null){
      y.classList.remove('test')
        y.classList.add('test2')
        console.log('element');
        
      }
    }
  }
  message4(x:any){
    let y = document.getElementById('p4')
    let z =x.target.value
    
    if(x.target.value == ''){
      if(y!=null){
        y.classList.remove('test2')
        y.classList.add('test')
        console.log('empty');
        
      }
    }else if (x.target.value != '') {
      if(y!=null){
      y.classList.remove('test')
        y.classList.add('test2')
        console.log('element');
        
      }
    }
  }
}
