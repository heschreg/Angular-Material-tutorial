import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Employee } from '../employee';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { AppService } from './../service/app.service';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css']
})
export class SimpleTableComponent implements OnInit, AfterViewInit {

  EmpData : Employee[] = [
    {
      "Id": 1, "FirstName": "Johannah", "LastName": "Kiffin", "Email": "jkiffin0@google.pl", "Gender": "F", "JobTitle": "Administrative Assistant I"
    },
    {
      "Id": 2,"FirstName": "Eldin","LastName": "Astbery","Email": "eastbery1@geocities.jp","Gender": "M",
      "JobTitle": "Senior Editor"
    },
    {
      "Id": 3,
      "FirstName": "Nahum",
      "LastName": "Mounce",
      "Email": "nmounce2@vk.com",
      "Gender": "M",
      "JobTitle": "Programmer II"
    }, {
      "Id": 4,
      "FirstName": "Gallard",
      "LastName": "Standell",
      "Email": "gstandell3@europa.eu",
      "Gender": "M",
      "JobTitle": "Account Representative II"
    }, {
      "Id": 5,
      "FirstName": "Koenraad",
      "LastName": "Domleo",
      "Email": "kdomleo4@cornell.edu",
      "Gender": "M",
      "JobTitle": "Quality Control Specialist"
    }, {
      "Id": 6,
      "FirstName": "Uriah",
      "LastName": "Turbat",
      "Email": "uturbat5@aol.com",
      "Gender": "M",
      "JobTitle": "Accounting Assistant II"
    }, {
      "Id": 7,
      "FirstName": "Waldemar",
      "LastName": "Fowley",
      "Email": "wfowley6@sun.com",
      "Gender": "M",
      "JobTitle": "Account Coordinator"
    }, {
      "Id": 8,
      "FirstName": "Rodolfo",
      "LastName": "Trenchard",
      "Email": "rtrenchard7@yandex.ru",
      "Gender": "M",
      "JobTitle": "Data Coordiator"
    }, {
      "Id": 9,
      "FirstName": "Konstance",
      "LastName": "Dudek",
      "Email": "kdudek8@techcrunch.com",
      "Gender": "F",
      "JobTitle": "Administrative Assistant I"
    }, {
      "Id": 10,
      "FirstName": "Monti",
      "LastName": "Perton",
      "Email": "mperton9@youtube.com",
      "Gender": "M",
      "JobTitle": "Operator"
    }
  ];

  constructor(public AppService: AppService) { }

  @ViewChild('paginator') paginator!: MatPaginator;

  // Variante mit Pagination
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Email','Gender','JobTitle'];
  dataSource = new MatTableDataSource<Employee>();

  ngOnInit(): void {

    /*
    this.dataSource.filterPredicate = function (record,filter): boolean {
      // return record.Gender.toLocaleLowerCase() == filter.toLocaleLowerCase();
      return record.FirstName.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    }
    */

  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.EmpData);
    this.dataSource.filterPredicate = this.createFilter();
    this.dataSource.paginator = this.paginator;
  }

  private createFilter(): (employee: Employee, filter: string) => boolean {
    let filterFunction =
        function (employee: Employee, filter: string): boolean {

          // Der Json-Parse wird nur gebraucht, wenn man den zu filternden Wert aus einer Listbox geholt hat,
          // aus der man das Ergebnis immer als Json bekommt
          // let searchTerms = JSON.parse(filter);
          let searchTerms = filter;
          // let resb = employee.JobTitle.toLocaleLowerCase().indexOf(searchTerms) !== -1;
          let resb = employee.Gender.toLocaleLowerCase().indexOf(searchTerms) !== -1;
          // if (resb) {console.log(employee.JobTitle);}

          return resb;

          // return employee.Gender.indexOf(searchTerms.status) !== -1 && employee.FirstName.indexOf(searchTerms.source) !== -1;
        }

    return filterFunction;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(row: any) {
    console.log(row);
  }
}
