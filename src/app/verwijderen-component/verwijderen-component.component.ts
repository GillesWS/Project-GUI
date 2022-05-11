import { Component, OnInit } from '@angular/core';
import { lijsten } from '../lijsten';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-verwijderen-component',
  templateUrl: './verwijderen-component.component.html',
  styleUrls: ['./verwijderen-component.component.css']
})
export class VerwijderenComponentComponent implements OnInit {

  lijsten : lijsten[] = [];

  constructor(private ss: ServersService) {}

  ngOnInit(): void{
    
  }
  
  deleteLijst(val: any){
    if (confirm("Are you sure you want to delete? ")){
    this.ss.deleteLijst(val).subscribe((response) => {
      this.lijsten = response;
    });
    this.ss.getLijsten();
  }
  }
}
