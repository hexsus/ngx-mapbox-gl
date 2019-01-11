import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MapService } from '../map/map.service';
import { Subscription } from 'rxjs';
declare let MapboxDraw: any;

@Component({
  selector: 'mgl-draw',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private control: any;
  constructor(private MapService: MapService) {
  }

  ngOnInit() {
    this.subscription = this.MapService.mapCreated$.subscribe(() => {
      this.control = new MapboxDraw();
      this.MapService.mapInstance.addControl(this.control, 'top-left');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.control) {
      this.MapService.removeControl(this.control);
    }
  }
}
