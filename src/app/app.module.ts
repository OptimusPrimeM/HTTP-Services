import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { Post2Service } from './services/post2.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { Post1Component } from './post1/post1.component';
import { Post2Component } from './post2/post2.component';

@NgModule({
  declarations: [
    AppComponent,
    Post1Component,
    Post2Component
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ 
    Post2Service,
    {
      provide :ErrorHandler,
      useClass: AppErrorHandler
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
