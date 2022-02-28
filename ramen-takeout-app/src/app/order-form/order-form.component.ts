import { Component, OnInit } from '@angular/core';
import { Menu } from '../order-form';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  entries = ['small', 'medium', 'large'];
  
  model = new Menu(1, '', this.entries[4], '', true,'');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newMenu() {
    this.model = new Menu(1, '', '','',true,'');
  }

  Menu1(): Menu{
    const menuOrder = new Menu(1, '', '','',true,'');
    // console.log('I would like to order a ' + menuOrder.name);
    return menuOrder;
  }

  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value;
  }
}



