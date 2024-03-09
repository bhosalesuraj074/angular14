import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-village',
  templateUrl: './state-village.component.html',
  styleUrls: ['./state-village.component.css']
})
export class StateVillageComponent implements OnInit {
  
  selectedCountryName='';
  selectedStateName ='';
  selectedDistrictName=''; 
  selectedTalukaName = '';
  selectedVillageName='';
  setState !: string[];
  setDist !:string[];
  setTaluka !: string[];
  setVillage !: string[];
   countries = ['India', 'USA', 'UAE'];
   states =[ 
       {country: 'India',state: ['Maharashtra', 'UP', 'karnataka']},
       {country:'USA' ,state: [ 'California', 'Texas', 'Hawaii']},
       {country:'UAE' ,state:  ['Abu Dhabi', 'Dubai','Sharjah'] }
      ]
   districts  = [
    { state: 'Maharashtra', districts: ['Solapur', 'Satara', 'Pune'] },
    { state: 'UP', districts: ['Hardoi', 'Rampur', 'Mathura'] },
    { state: 'Karnataka', districts: ['Mysore', 'Kalaburagi Division', 'Chamarajanagar'] },
    { state: 'California', districts: ['Cortina', 'Lytton', 'Guidiville'] },
    { state: 'Texas', districts: ['Cherokee', 'Anderson', 'Henderson'] },
    { state: 'Hawaii', districts: ['Honolulu', 'Kalawao', 'Kauai', 'Maui'] },
    { state: 'Abu Dhabi', districts: ['Baniyas', 'Shamkha'] },
    { state: 'Dubai', districts: ['Bastakiya', 'Al Karama', 'Bur Dubai', 'Business Bay', 'Dubai Marina'] },
    { state: 'Sharjah', districts: ['Mleiha', 'Dhaid', 'Kalba', 'Khor Fakkan'] }
  ];

  taluka = [
    {  dist :'Solapur' , taluka : ['Pandharpur', 'Madha', 'Sangole']},
    {  dist :'Satara' , taluka : ['Khatav','Man']  },
    {  dist: 'Pune' , taluka :['Ambegaon', 'Khed', 'Baramati', 'Bhor', 'Daund' ] }
  ]
  
  village =
  [ {taluka : 'Pandharpur', villages :['Tisangi', 'Sonake', 'Bhose']},
  {taluka : 'Sangole', villages :['Khavaspur', 'Dhayti', 'Bamani']},
  {taluka :'Madha', villages :['Dhanore', 'Dhavalas', 'Footjawalgaon'] } 
  ]
 
  
  constructor() { }
  ngOnInit(): void {
  }
  

  selectState(){
    this.setState = this.states
      .filter(state => state.country === this.selectedCountryName)
      .map(state => state.state)
      .reduce((acc, current) => acc.concat(current), []);  
      //console.log(this.setState);
     }

 selectDistrict(){
    // console.log(this.selectedStateName);
    this.setDist= this.districts.filter(dist => dist.state == this.selectedStateName)
     .map(dist => dist.districts)
     .reduce((acc, current) => acc.concat(current), []);  
    // console.log(this.setDist); 
    
 }
 selectTaluka(){
  //console.log(this.selectedDistrictName);
  this.setTaluka =  this.taluka.filter(tal => tal.dist == this.selectedDistrictName)
  .map(tal => tal.taluka)
  .reduce((acc, current) => acc.concat(current), []);  
  //console.log(this.setTaluka);
  
  
 }
 selectVillage(){
   this.setVillage = this.village.filter(village => village.taluka == this.selectedTalukaName)
   .map(village => village.villages)
   .reduce((acc, current) => acc.concat(current), []);  console.log(this.setVillage);
 }
     
  
 showData(){
  console.log('User Address =>',[
    this.selectedCountryName,
  this.selectedStateName ,
  this.selectedDistrictName,
  this.selectedTalukaName ,
  this.selectedVillageName
  ]);
  
 }
 
     
}
