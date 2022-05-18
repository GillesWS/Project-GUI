import { Component } from '@angular/core';
import { lijsten } from './lijsten';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

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

}