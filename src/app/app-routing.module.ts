import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepoesComponent } from './repoes.component';
import { RepoDetailComponent } from './repo-detail.component';
import { RepoIssuesComponent } from './repo-issues.component';

const routes: Routes = [
  { path: '', redirectTo: '/repoes', pathMatch: 'full' },
  { path: 'detail/:id', component: RepoDetailComponent },
  { path: 'repoes', component: RepoesComponent },
  { path: 'issues/:name', component: RepoIssuesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
