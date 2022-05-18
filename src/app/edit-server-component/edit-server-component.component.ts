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

  lijsten!: lijsten;
  val: any;
  @ViewChild('userForm') form!: NgForm;
  id! : any
  lijstnaamText!: any;
  favcolor!: any;
  omschrijvingText!: any;


  

  constructor(private ss: ServersService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.ss.getLijstId(this.route.snapshot.params['id']).subscribe((result: any)=>{
      this.lijstnaamText = result['lijstnaam'];
      this.favcolor = result['lijstkleur'];
      this.omschrijvingText = result['omschrijving'];
    });
    
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
    }*/
    
    this.ss.updateLijst(this.route.snapshot.params['id'], this.form.value).subscribe(
      (result) => {
        //nakijken
        this.lijstnaamText = this.lijstnaamText;
        this.favcolor = this.favcolor;
        this.omschrijvingText = this.omschrijvingText;
        console.log('server updated: ', result);
        //this.router.navigate(['lijsten', this.lijsten.id]);
      }
    )
   
  } 
}
