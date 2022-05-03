import { Component, OnInit, ViewChild } from '@angular/core';
import { lijsten } from '../lijsten';
import { ServersService } from '../servers.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-server-component',
  templateUrl: './delete-server-component.component.html',
  styleUrls: ['./delete-server-component.component.css']
})
export class DeleteServerComponentComponent implements OnInit {

  lijsten : lijsten[] = [];
  @ViewChild('userForm') form!: NgForm;
  lijstnaamText!: any;
  favcolor!: any;
  omschrijvingText!: any;

  constructor(private ss: ServersService, private router: Router) {}

  ngOnInit(): void{
    
  }
  
  
}
