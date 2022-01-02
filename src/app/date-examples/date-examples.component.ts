import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { formatDate } from '@angular/common';
import { NativeDateAdapter, DateAdapter , MAT_DATE_FORMATS } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

// Die folgenden 4 display-Labels (dateInput, monthYearLabel, dateA11yLabel, monthYearA11yLabel)
// sind so vorgegeben
export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

class PickDateAdapter extends NativeDateAdapter {

  override format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          // so steht es dann im direkten Eingabefeld drin
          // return formatDate(date,'dd-MMM-yyyy',this.locale);
          return formatDate(date,'dd.MM.yyyy',this.locale);
      } else {
          return date.toDateString();
      }
  }
}

@Component({
  selector: 'app-date-examples',
  templateUrl: './date-examples.component.html',
  styleUrls: ['./date-examples.component.css'],
  providers: [
     {provide: DateAdapter, useClass: PickDateAdapter},
     {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
 ],
 encapsulation: ViewEncapsulation.None,
})
export class DateExamplesComponent implements OnInit {

  startDate = new Date(2019, 0, 1);
  minDate = new Date(1999, 0, 1);
  maxDate = new Date(2021,11,24);

  thedate:any;
  dateMinMax: any;
  encapsulation!: ViewEncapsulation.None;

  constructor() { }

  ngOnInit(): void {}

  dateFilter: (thedate: Date | null) => boolean =
    (date: Date | null) => {
      const day = date?.getDay();
      return day !== 0 && day !== 6;
      //0 means sunday
      //6 means saturday
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {

    // Only highligh dates inside the month view.
    const day = cellDate.getDay();

    // Highlight the 1st and 20th day of each month.
    return (day === 0 || day === 6) ? 'highlight-dates' : '' ;
  }

}
