import { Component, Input, OnInit } from '@angular/core';
import { produtos } from '../../../models/produto.model';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnInit {
  
  @Input()
  titulo?: string;

  @Input()
  productslist: Array<produtos> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
