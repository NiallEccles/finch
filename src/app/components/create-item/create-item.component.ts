import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay/overlay.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  constructor(private overlayService: OverlayService) { }

  ngOnInit(): void {
  }

  public closeOverlay(): void {
    this.overlayService.isVisible.next(false);
  }

  public stopEvent(event: Event): void{
    event.stopPropagation();
  }

}
