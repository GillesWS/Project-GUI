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

  columns = ["id","Lijst naam", "Lijst kleur", "Omschrijving"];

  index = ["id","lijstnaam", "lijstkleur", "omschrijving"];


  ngOnInit(): void{
    this.onGetServer();
  }
  
  onGetServer(): void{
    this.ss.getLijsten().subscribe(
      (response: lijsten[])=>{
        console.log('received lijsten: ',response)
        this.lijsten = response;
      },
      (error) => console.log('error: ',error),
        () => console.log('ready!')
      );
  }

  deleteLijst(val: any){
    if (confirm("Are you sure you want to delete? ")){
    this.ss.deleteLijst(val).subscribe((response) => {
      this.lijsten = response;
    });
    this.onGetServer();
  }
  }
}
