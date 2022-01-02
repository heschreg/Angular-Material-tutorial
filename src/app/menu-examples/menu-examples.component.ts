import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {Router} from '@angular/router';

export class MatMenuListItem {
  menuLinkText: string | undefined;
  menuIcon: string | undefined;
  isDisabled: boolean | undefined;
  routerLink: string | undefined;
}

@Component({
  selector: 'app-menu-examples',
  templateUrl: './menu-examples.component.html',
  styleUrls: ['./menu-examples.component.css']
})
export class MenuExamplesComponent implements OnInit {

  menuListItems: MatMenuListItem[] = [];
  selectedMenu : string | undefined ;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuListItems = [
      {menuLinkText: 'Logs',     menuIcon: 'logs',       isDisabled:false, routerLink: '/0'},
      {menuLinkText: 'Settings', menuIcon: 'settings',   isDisabled:false, routerLink: '/1'},
      {menuLinkText: 'AboutUs',  menuIcon: 'people',     isDisabled:false, routerLink: '/2'},
      {menuLinkText: 'Help',     menuIcon: 'help',       isDisabled:false, routerLink: '/3'},
      {menuLinkText: 'Contact',  menuIcon: 'contact',    isDisabled:false, routerLink: '/4'},
      {menuLinkText: 'Settings', menuIcon: 'settings',   isDisabled:false, routerLink: '/5'},
      {menuLinkText: 'Home',     menuIcon: 'home',       isDisabled:false, routerLink: '/6'},
      {menuLinkText: 'DynCont',  menuIcon: 'help',       isDisabled:false, routerLink: '/7'},
    ];
  }

  /*
    <button (click)="openMatMenuProgrammatically()" mat-button>  Open Menu </button>
    <button mat-icon-button #triggerBtn [matMenuTriggerFor]="normalMenu"> <mat-icon>more_vert</mat-icon> </button>
  */

  @ViewChild(MatMenuTrigger) triggerBtn!: MatMenuTrigger;

  openMatMenuProgrammatically(){
      this.triggerBtn.openMenu();
  }

  clickMenuItem(menuItem : MatMenuListItem){
    console.log(menuItem);
    this.selectedMenu = menuItem.menuLinkText;
    this.router.navigate([menuItem.routerLink]);
}
}
