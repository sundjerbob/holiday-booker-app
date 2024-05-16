import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrl: './light-switch.component.scss'
})

export class LightSwitchComponent implements OnInit {
  
  divsToGenerate: number[] = [];

  @Input() selectedSwitchIndex!: number;

  @Input() initialNumber!: number;

  @Output() selectedSwitchChange = new EventEmitter<number>();

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
    this.selectedSwitchIndex = index;
    this.selectedSwitchChange.emit(this.selectedSwitchIndex);
  }

}

export default LightSwitchComponent;
