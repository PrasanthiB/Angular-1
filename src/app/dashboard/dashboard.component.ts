import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
// import { FeatureComponent } from './feature.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _router:Router){}

  logout(){
    // go to dashboard
    this._router.navigateByUrl('/login')

    // remove the token
    sessionStorage.removeItem("token")
  }}
