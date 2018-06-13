import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Router,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MyserComComponent } from './myser-com/myser-com.component';
import { MyserNameService } from './services/myser-name.service';
const approuting=[

  {path:'countrylist',component:MyserComComponent}
  
  ]
  

@NgModule({
  declarations: [
    AppComponent,
    MyserComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approuting)

  ],
  providers: [MyserNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
