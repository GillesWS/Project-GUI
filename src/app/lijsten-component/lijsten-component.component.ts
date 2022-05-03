import { Component, OnInit } from '@angular/core';
import { lijsten } from '../lijsten';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-lijsten-component',
  templateUrl: './lijsten-component.component.html',
  styleUrls: ['./lijsten-component.component.css']
})
export class LijstenComponentComponent implements OnInit {

  lijsten : lijsten[] = [];

  constructor(private ss: ServersService) {}

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
    this.ss.deleteLijst(val).subscribe(
      data => {});
    this.ss.deleteLijst(val).subscribe((response) => {
      this.lijsten = response;
    });
    this.onGetServer();
  }
  }

  
}
