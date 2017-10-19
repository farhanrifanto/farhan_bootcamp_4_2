import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceService {

  constructor() { }

  Id : number  ;
  Name : string;


  public courselist: Object[] = [
    {'Id' : '1', 'Name' : 'Kalkulus'},
    {'Id' : '2', 'Name' : 'Anatomi'},
    {'Id' : '3', 'Name' : 'Histologi'},
    {'Id' : '4', 'Name' : 'Programming'},
    {'Id' : '5', 'Name' : 'Pkn'}];
    

    add() : void {
      
              this.courselist.push({ 
                "Id" : this.Id,
                "Name" : this.Name,
                
               });
        
              
      
      
      
    }
  




}
