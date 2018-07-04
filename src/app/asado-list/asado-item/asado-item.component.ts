import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asado-item',
  templateUrl: './asado-item.component.html',
  styleUrls: ['./asado-item.component.scss']
})
export class AsadoItemComponent implements OnInit {
  @Input('asado') asado;
  constructor() { }

  ngOnInit() {
  }

}
