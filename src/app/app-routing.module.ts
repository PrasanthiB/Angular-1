import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculatorComponent } from './calculator/calculator.component';
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
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartstoreComponent } from './flipkartstore/flipkartstore.component';
import { GmailsComponent } from './gmails/gmails.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { AuthenticationGuard } from './authentication.guard';
import { ReloadComponent } from './reload/reload.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewBankdetailsComponent } from './view-bankdetails/view-bankdetails.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { CountrycityLangComponent } from './countrycity-lang/countrycity-lang.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { ParentComponent } from './parent/parent.component';
import { RatingComponent } from './rating/rating.component';
import { ParentTextAreaLimitComponent } from './parent-text-area-limit/parent-text-area-limit.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ItemsComponentComponent } from './items-component/items-component.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'dice',component:DiceComponent},
    {path:'directive-pipes', component:DirectivePipesComponent},
    {path:'employees', component:EmployeesComponent},
    {path:'flipkarts',component:FlipkartsComponent},
    {path:'flipkartstore',component:FlipkartstoreComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'viewVehicle/:id',component:ViewVehicleComponent},
    {path:'bankaccounts',component:BankaccountsComponent},
    {path:'bank-details',component:BankDetailsComponent},
    {path:'edit-bankdetails/:id',component:BankDetailsComponent},
    {path:'view-bankdetails/:id',component:ViewBankdetailsComponent},
    {path:'student-id',component:StudentIdComponent},
    {path:'student-details',component:StudentDetailsComponent},
    {path:'view-student/:id',component:ViewStudentComponent},
    {path:'edit-student/:id',component:StudentDetailsComponent},
    {path:'photo-gallery',component:PhotoGalleryComponent},
    {path:'gmails',component:GmailsComponent},
    {path:'reload',component:ReloadComponent},
    {path:'countrycitylang',component:CountrycityLangComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'create-students',component:CreateStudentsComponent},
    {path:'parent',component:ParentComponent},
    {path:'rating',component:RatingComponent},
    {path:'parentTextAreaLimit',component:ParentTextAreaLimitComponent},
    {path:'sibling',component:SiblingComponent},
    {path:'ItemsComponent',component:ItemsComponentComponent},
    {path: 'todoApp',component:TodoAppComponent}
  
 ]},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
