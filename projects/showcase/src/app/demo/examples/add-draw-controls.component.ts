import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showcase-add-draw-controls',
  template: `
    <mgl-map [style]="'mapbox://styles/mapbox/streets-v9'">
      <mgl-draw></mgl-draw>
    </mgl-map>
  `,
  styleUrls: ['./examples.css']
})
export class AddDrawControlsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
