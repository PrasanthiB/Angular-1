import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivePipesComponent } from './directive-pipes/directive-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartsComponent } from './flipkarts/flipkarts.component';
import { DiceComponent } from './dice/dice.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartstoreComponent } from './flipkartstore/flipkartstore.component';
import { GmailsComponent } from './gmails/gmails.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CommonModule } from '@angular/common';
import { StudentIdComponent } from './student-id/student-id.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ReloadComponent } from './reload/reload.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewBankdetailsComponent } from './view-bankdetails/view-bankdetails.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { CountrycityLangComponent } from './countrycity-lang/countrycity-lang.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivePipesComponent,
    EmployeesComponent,
    FlipkartsComponent,
    DiceComponent,
    VehiclesComponent,
    BankaccountsComponent,
    FlipkartstoreComponent,
    GmailsComponent,
    CreateVehicleComponent,
    BankDetailsComponent,
    StudentIdComponent,
    StudentDetailsComponent,
    PhotoGalleryComponent,
    ReloadComponent,
    ViewVehicleComponent,
    ViewBankdetailsComponent,
    ViewStudentComponent,
    CountrycityLangComponent
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
