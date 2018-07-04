import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-asado-detail',
  templateUrl: './asado-detail.component.html',
  styleUrls: ['./asado-detail.component.scss']
})
export class AsadoDetailComponent implements OnInit {
  asadoId = null;
  asado = { name : '', price: null };
  constructor(private _store: AngularFirestore,
     private _router: Router,
     private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(data => this.asadoId = data.id);
    this._store.collection('asados', ref => ref.where('id', '==', this.asadoId))
    .valueChanges()
    .pipe(take(1))
    .subscribe(asado => this.asado = asado[0]);
  }

}
