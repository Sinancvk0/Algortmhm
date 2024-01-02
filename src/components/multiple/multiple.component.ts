import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiple',
  standalone: true,
  imports: [],
  templateUrl: './multiple.component.html',
  styleUrl: './multiple.component.scss'
})
export class MultipleComponent {
  @ViewChild('typedText') typedTextElement!: ElementRef;

  typedItems: string = 'Software Developer';
  currentIndex:number=0;

  ngOnInit() {
    setTimeout(() => {
      const textElement: HTMLElement = this.typedTextElement.nativeElement;

      const intervalId = setInterval(() => {
        let currentText = this.typedItems.substring(0, this.currentIndex);
        if (this.currentIndex < this.typedItems.length) {
          currentText += this.typedItems[this.currentIndex];
        }
        textElement.textContent = currentText;

        if (this.currentIndex === this.typedItems.length) {
          clearInterval(intervalId); 
        } else {
          this.currentIndex++;
        }
      }, 200);
    }, 0);
  }

}

