import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  myBtn(){
    let boxcontainer = document.getElementById('boxContainer')
    boxcontainer?.classList.remove('action2')
    boxcontainer?.classList.add('action')
  }

  myBtn2(x:any){
    x.stopPropagation()
  }

  modal(){
    let boxcontainer = document.getElementById('boxContainer')
    boxcontainer?.classList.remove('action')
    boxcontainer?.classList.add('action2')
  }

  image(){
    let images = Array.from( document.querySelectorAll('.myimg img'))
    let boxItem = document.getElementById('boxItem')
    let boxcontainer = document.getElementById('boxContainer')
    boxItem?.classList.remove('image3')
    boxItem?.classList.remove('image2')
    boxItem?.classList.add('image1')
    boxcontainer?.classList.remove('action')
    boxcontainer?.classList.add('action2')
  }

  image2(){
    let images = Array.from( document.querySelectorAll('.myimg img'))
    let boxItem = document.getElementById('boxItem')
    let boxcontainer = document.getElementById('boxContainer')
    boxItem?.classList.remove('image1')
    boxItem?.classList.remove('image3')
    boxItem?.classList.add('image2')
    boxcontainer?.classList.remove('action')
    boxcontainer?.classList.add('action2')
  }
  
  image3(){
    let images = Array.from( document.querySelectorAll('.myimg img'))
    let boxItem = document.getElementById('boxItem')
    let boxcontainer = document.getElementById('boxContainer')
    boxItem?.classList.remove('image1')
    boxItem?.classList.remove('image2')
    boxItem?.classList.add('image3')
    boxcontainer?.classList.remove('action')
    boxcontainer?.classList.add('action2')
  }
}
