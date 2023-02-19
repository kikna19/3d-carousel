import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'carousel';
  @ViewChild('container', {static: true}) containerEl!: ElementRef;
  box!: ElementRef;
  items: any[] = [];

  ngAfterViewInit(): void {
    const n = 26;
    gsap.set(this.containerEl.nativeElement, {
      perspective: 1200
    });
    for (let i = 0; i < n; i++) {
      const box: any = document.createElement('div');
      box.classList.add('box');
      this.containerEl.nativeElement.appendChild(box);
      this.items.push(box);
      gsap.set(box, {
        position: 'absolute',
        left: '50%',
        top: '50%',
        x: '-50%',
        y: '-50%',
        z: 600,
        width: 85,
        height: 472,
        background: 'red',
        border: '1px solid white',
      });
      gsap.fromTo(box, {
        scaleY: 0,
        rotateY: 80 + i / n * 205,
        transformOrigin: String("50% 50% -560%")
      }, {
        scaleY: 1,
        duration: 1,
        delay: 1 - 0.5 * (i / n),
        ease: 'elastic'
      });
    }
    const l = this.items.length;
    gsap.set([
      this.items[0], this.items[1], this.items[2], this.items[3],
      this.items[l - 1], this.items[l - 2], this.items[l - 3], this.items[l - 4],
    ], {
      display: 'none'
    });
    this.items.forEach((el:any, index:number)=>{
      el.addEventListener('click',() => {
        gsap.set(this.items[index],{
          width: 120
        })
      })
    })
  }

  click(index: number){
    gsap.set(this.items[index],{
      width: 120
    })
  }
}
