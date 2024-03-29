import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServiceComponent } from './service/service.component';
import { RelativeformComponent } from './reactiveform/reactiveform.component';
import { FormComponent } from './form/form.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PipesComponent,
    ServiceComponent,
    RelativeformComponent,
    FormComponent,
    FormarrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
