import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Repo } from './repo';
import { Issue } from './issues';

@Injectable()
export class RepoService {
  private repoesUrl = 'http://api.github.com/users/Automattic/repos';
  private issuesUrl = 'http://api.github.com/repos/Automattic';
  constructor(private http: Http) {}

  getAll() {
    return this.http.get(this.repoesUrl)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getIssues(name:string) {
    const url = `${this.issuesUrl}/${name}/issues`;
    return this.http.get(url)
    .map((res) => res.json())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
