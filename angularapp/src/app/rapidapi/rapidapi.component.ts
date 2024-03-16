import { Component, OnInit, ViewChild } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
  newsFeed :any;
  constructor(private _rapidApi : RapidapiService) { }

  ngOnInit(): void {
 
       this.getDetails('tesla');
    
  }

  getDetails(serach:string){
       
    this._rapidApi.getYahooFinance(serach).subscribe((res: any) => {
      console.log('rapid api data', res);
      const filteredNewsFeed = [];
      for (const item of res.news) {
        if (item.thumbnail && item.thumbnail.resolutions && item.thumbnail.resolutions.length > 0) {
          filteredNewsFeed.push(item);
        }
      }
      this.newsFeed = filteredNewsFeed;
      console.log('news data ', this.newsFeed[0]?.thumbnail?.resolutions[0]?.url);
    });

  }
 
  

}
