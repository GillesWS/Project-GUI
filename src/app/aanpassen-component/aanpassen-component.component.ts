import { Component, OnInit, ViewChild } from '@angular/core';
import { lijsten } from '../lijsten';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aanpassen-component',
  templateUrl: './aanpassen-component.component.html',
  styleUrls: ['./aanpassen-component.component.css']
})
export class AanpassenComponentComponent implements OnInit {

  lijsten : lijsten[] = [];
  lijst!: lijsten;
  val: any;
  @ViewChild('userForm') form!: NgForm;
  lijstnaamText!: any;
  favcolor!: any;
  omschrijvingText!: any;
  

  constructor(private ss: ServersService, private router: Router, private route: ActivatedRoute) {}

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

  onUpdateServer(val: any){
    /*let sub = this.route.params.subscribe(params =>{
      this.val = params["id"];
    })
    console.log(this.val);
   const nieuweLijst = {
     id: null,
     lijstnaam: this.form.value.lijstnaamText,
     lijstkleur: this.form.value.favcolor,
     omschrijving: this.form.value.omschrijvingText
   }*/
   this.ss.updateLijst(val).subscribe(
     (response: lijsten) => {
       console.log('server updated, ',response);
       this.ss.getLijsten();
       this.router.navigate(['lijsten ',val]);
     }
   )
 }
 
 toEdit(val: any){
    this.router.navigate(['/editServerComponent', val]);
 }


}
