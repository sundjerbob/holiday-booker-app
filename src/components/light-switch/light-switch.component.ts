import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss']
})
export class LightSwitchComponent implements OnInit {

  @Input() numberOfSwitches: number = 5;
  @Input() initialSelectedIndex: number = 0;
  @Output() selectedSwitchChange = new EventEmitter<number>();

  divsToGenerate: number[] = [];
  selectedSwitchIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.initDivs(this.numberOfSwitches);
    this.selectedSwitchIndex = this.initialSelectedIndex;
  }

  private initDivs(numberOfDivs: number): void {
    this.divsToGenerate = Array.from({ length: numberOfDivs }, (_, i) => i);
  }

  public selectSwitch(index: number): void {
    this.selectedSwitchIndex = index;
    this.selectedSwitchChange.emit(this.selectedSwitchIndex);
  }
}

