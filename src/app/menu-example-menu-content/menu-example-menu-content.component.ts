import { Component, OnInit } from '@angular/core';

export class MenuData{
  Users! : User[];
  OtherMenus! : string[];
  ActiveUser! : User;
}

export class User{
  Name! : string;
  IsActive! : boolean;
}

@Component({
  selector: 'app-menu-example-menu-content',
  templateUrl: './menu-example-menu-content.component.html',
  styleUrls: ['./menu-example-menu-content.component.css']
})
export class MenuExampleMenuContentComponent implements OnInit {

  activeUser! : User;
  menuItems!  : MenuData;


  constructor() {

    this.activeUser = new User();
    this.activeUser.Name = "@angular_js";
    this.activeUser.IsActive = true;

    this.menuItems = new MenuData();
    this.menuItems.Users = [];

    this.menuItems.Users.push({Name:"@arungudelli",IsActive:false});
    this.menuItems.Users.push(this.activeUser);

    this.menuItems.ActiveUser = this.activeUser;

    this.menuItems.OtherMenus = [];
    this.menuItems.OtherMenus.push("Add an existing account");
    this.menuItems.OtherMenus.push("Manage accounts");

   }

  ngOnInit(): void {
  }

}
