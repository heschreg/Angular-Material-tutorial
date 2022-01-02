import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-tooltip-delay-example',
  templateUrl: './tooltip-delay-example.component.html',
  styleUrls: ['./tooltip-delay-example.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipDelayExampleComponent implements OnInit {

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  constructor() { }

  ngOnInit(): void {
  }

}
