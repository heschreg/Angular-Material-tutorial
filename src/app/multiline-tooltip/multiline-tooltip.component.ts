import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatTooltip, matTooltipAnimations } from '@angular/material/tooltip';

@Component({
  selector: 'app-multiline-tooltip',
  templateUrl: './multiline-tooltip.component.html',
  styleUrls: ['./multiline-tooltip.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MultilineTooltipComponent implements OnInit {

  ishidden: boolean = false;
  isdisabled: boolean = true;

  tooltipContent : string ="";
  tooltipContent2 : string ="";

  constructor() {
    this.tooltipContent = "defaultMessage";
    this.tooltipContent2 = "Variante 2";
   }

  @ViewChild('tooltipRef1') manualTooltip1!: MatTooltip;

  ngOnInit(): void {
  }

  isHidden(): boolean {
    this.ishidden = !this.ishidden;
    return this.ishidden;
  }

  isButtonDisabled() : boolean {
    return false;
  }

  showTooltip(){
    this.manualTooltip1.show();
  }

  hideTooltip(){
    this.manualTooltip1.hide();
  }

  toggleTooltip(){
    this.manualTooltip1.toggle();
  }

  getTooltipContent() : string {
    this.tooltipContent = "A dynamic tooltip Content";
    return this.tooltipContent;
  }



}
