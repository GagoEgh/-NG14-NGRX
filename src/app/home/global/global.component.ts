import { Component, OnInit, inject } from '@angular/core';
import { GlobalFeedService } from '../service/globalFeed.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
  standalone:true,
})
export class GlobalComponent implements OnInit{

  globalFeedService = inject(GlobalFeedService);
  ngOnInit(): void {
    this.globalFeedService.getGlobalFeed()
    .subscribe({
      next:(res)=>{
        console.log('resss',res)
      }
    })
  }

}
