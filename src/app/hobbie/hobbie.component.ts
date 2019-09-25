import { Component, OnInit } from '@angular/core';
import {HobbyService} from "../../service/hobby.service";
import {Hobby} from "../../Model/hobbies";

@Component({
  selector: 'app-hobbie',
  templateUrl: './hobbie.component.html',
  styleUrls: ['./hobbie.component.css']
})
export class HobbieComponent implements OnInit {
  hobbies: Hobby[]=[];
  constructor(private hobServ: HobbyService) { }

  ngOnInit() {
    this.hobServ.getHobbies().subscribe(data=>{
      data.forEach(hobby=>{
        this.hobbies.push(hobby);
      })
    })
  }

}
