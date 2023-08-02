import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  menuVariable:boolean = false;
  menu_icon_variable:boolean = false

  openMenu(){
    this.menuVariable  = ! this.menuVariable;
    this.menu_icon_variable = ! this.menu_icon_variable

  }

  closeMenu(){
    this.menuVariable  = false
    this.menu_icon_variable = false
 
  }

}
