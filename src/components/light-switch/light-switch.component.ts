import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrl: './light-switch.component.scss'
})

export class LightSwitchComponent implements OnInit {
  divsToGenerate: number[] = [];
  selectedSwitchIndex: number = 0;

  @Input() initialNumber!: number;

  constructor() {
  }

  ngOnInit(): void {
    this.initDivs(this.initialNumber);
  }

  private initDivs(numberOfDivs: number): void {
    this.divsToGenerate = Array.from({length: numberOfDivs}, (_, i) => i);
    console.log(this.divsToGenerate);
  }

  public selectSwitch(index: number): void {
    alert('aaa');
    this.selectedSwitchIndex = index;
  }

}

export default LightSwitchComponent;
