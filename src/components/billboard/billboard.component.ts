import {Component, Input, OnInit, PLATFORM_ID, Inject} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({

  selector: 'app-billboard-component',
  templateUrl: './billboard.component.html',
  styleUrl: './billboard.component.scss',

  animations: [

    trigger('imgState', [

      state('off', style({
        transform: 'translateX(-50%)',
        filter: 'blur(10px)',
        opacity: 0,
        visibility: 'hidden'
      })),

      state('on', style({
        transform: 'translateX(0)',
        filter: 'blur(0)',
        opacity: 1,
        visibility: 'visible'
      })),

      transition('off => on', [
        animate('0.5s ease-out')
      ]),

      transition('on => off', [
        animate('0.5s ease-out'),
      ])
    ])
  ]
})


export class BillboardComponent implements OnInit {

  @Input() currentDisplayedIndex?: number;


  public imageIndices: imageObj [] = [
    {idx: 0, src: '/assets/hero_section/screen1.svg'},
    {idx: 1, src: '/assets/hero_section/screen2.jpg'},
    {idx: 2, src: '/assets/hero_section/screen3.jpg'},
    {idx: 3, src: '/assets/hero_section/screen4.jpg'},
  ];


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }


  ngOnInit() {
  }


}

interface imageObj {
  src: string;
  idx: number;
}

