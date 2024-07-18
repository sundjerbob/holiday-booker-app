import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  SimpleChanges,
  OnChanges,
  SimpleChange
} from '@angular/core';

import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-text-writer',
  templateUrl: './text-writer.component.html',
  styleUrls: ['./text-writer.component.scss']
})

export class TextWriterComponent implements OnInit, OnDestroy, OnChanges {

  @Input() text?: string;
  @Input() deltaTime = 15;

  characters: { char: string, delay: number }[] = [];
  currentTime = 0;

  private intervalId?: number;
  renderComponent = true;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startWritingEffect();
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    const textChange: SimpleChange = changes['text'];
    if (textChange && !textChange.isFirstChange()) {
      setTimeout(() => this.restartAnimation(), 100);
    }
  }

  restartAnimation(): void {
    this.renderComponent = false;
    setTimeout(() => {
      this.renderComponent = true;
      this.startWritingEffect();
    }, 100);
  }


  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  startWritingEffect(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.characters = [];
    this.currentTime = this.deltaTime;


    this.text?.split('').forEach((char, i) => {
      this.characters.push({char, delay: this.deltaTime * (i + 2)});
    });


    this.intervalId = window.setInterval(
      () => {
        this.currentTime += this.deltaTime;

        if (this.currentTime >= this.characters[this.characters.length - 1].delay)
          clearInterval(this.intervalId);
      },

      this.deltaTime
    );
  }
}
