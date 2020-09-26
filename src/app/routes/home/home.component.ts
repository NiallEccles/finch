import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay/overlay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showCreateItem: boolean;

  constructor(private overlayService: OverlayService) { 
    this.overlayService.isVisible.subscribe((isVisible)=>{
      this.showCreateItem = isVisible;
    });
   }

  ngOnInit(): void {
  }

  public toggleCreateItem(): void {
    this.overlayService.isVisible.next(!this.showCreateItem);
  }

}
