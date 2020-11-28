import { Component, OnInit } from '@angular/core';
import {GetApiService} from './get-api.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'angular-project';
  movieName=""
  email:string="";
  public loanapplications:any =[];

  
  bool: boolean=false
  constructor(
    private api:GetApiService
    ) {
    
  }
  ngOnInit(){
    this.api.apiCall()
    .subscribe(data => this.loanapplications = data);
      

  }

   products = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      name: 'Phone Mini',
      price: 0,
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: ''
    }
  ];
  
 

  
  Numbe: number =0
  

  onDisplay(){
    if(!this.bool){
    this.movieName="x-men"
    this.bool=true
    }
    else{
      this.movieName=""
    this.bool=false

    }

  }
  onIncrement(){
    this.Numbe++

  }
  onDecrement(){
    this.Numbe--


  }
}
