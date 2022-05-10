import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lijsten } from '../lijsten';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server-component',
  templateUrl: './edit-server-component.component.html',
  styleUrls: ['./edit-server-component.component.css']
})
export class EditServerComponentComponent implements OnInit {

  lijsten : lijsten[] = [];
  val: any;
  @ViewChild('userForm') form!: NgForm;
  id! : any
  lijstnaamText!: any;
  favcolor!: any;
  omschrijvingText!: any;


  

  constructor(private ss: ServersService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void{
    //this.onUpdateServer();
  }
  
   onUpdateServer(): void{
     /*let sub = this.route.params.subscribe(params =>{
       this.val = params["id"];
     })
     console.log(this.val);
    const nieuweLijst = {
      id: null,
      lijstnaam: this.form.value.lijstnaamText,
      lijstkleur: this.form.value.favcolor,
      omschrijving: this.form.value.omschrijvingText
    }
    const aangepasteLijst = {
      id: this.form.value.id,
      lijstnaam: this.form.value.lijstnaamText,
      lijstkleur: this.form.value.favcolor,
      omschrijving: this.form.value.omschrijvingText
    }
    this.ss.updateLijst(aangepasteLijst).subscribe(
      (response: lijsten) => {
        console.log('server updated, ',response);
        this.ss.getLijsten();
        this.router.navigate(['lijsten ',aangepasteLijst.id]);
      }
    )*/
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
