import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  observable !: any;
  date = new Date();
  fullName = 'Jack Sparrow';
  promiseObservable !: Observable<any>;
   
  day = 'monaDay';

  price: number = 7000;

  discount: number = 1;
  constructor(private _demoService$: DemoService) { }

  ngOnInit(): void {
    this.observable = this._demoService$.getnumbers();
    
    //creating promise 
     
    let promise = new Promise(( resolve, reject)=>{
      let promiseData = true; 
      if(promiseData){
          resolve(['Angular', 'Bootstrap', 'CSS', 'HTML', 'Java']);
      }
      else{
        reject('promise rejected')
      }
    });



      // creating the promise into observable
  this.promiseObservable =  from(promise);
   
  }

      

  

}
