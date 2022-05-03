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

  nieuwelijst = new lijsten(null ,'Kak', 'bruin','platte diarree');

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

  onAddLijst(): void{
    const nieuweLijst = {
      id: this.nieuwelijst.id,
      lijstnaam: this.nieuwelijst.lijstnaam,
      lijstkleur: this.nieuwelijst.lijstkleur,
      omschrijving: this.nieuwelijst.omschrijving
    }
    this.ss.addLijst(nieuweLijst).subscribe(
      (response) => {
        console.log('lijst toegevoegd: ',response);
        this.onGetServer();
      }
    ),
    (error: any) => console.log('error', error);
  }
}