import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoesComponent } from './repoes.component';
import { RepoService } from './repo.service';
import { AppRoutingModule } from './app-routing.module';
import { RepoIssuesComponent } from './repo-issues.component';
@NgModule({
  declarations: [
    AppComponent,
    RepoDetailComponent,
    RepoesComponent,
    RepoIssuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
