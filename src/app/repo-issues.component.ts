import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

import { Issue } from './issues';
import  { RepoService } from './repo.service';

@Component({
  selector: 'repo-issues',
  templateUrl: './repo-issues.component.html',
  styleUrls: ['./repo-issues.component.css']
})

export class RepoIssuesComponent implements OnInit {
  title = 'Represitories';
  issues = [];
  newIssueBody = '';

  constructor(private repoService:RepoService,
              private route: ActivatedRoute) {
  }

  getIssues(name):void {
    this.repoService.getIssues(name).subscribe(
      (data) => {
        this.issues = data;
        this.issues.forEach((item) => {
          item['comments'] = [];
          item['newComment'] = '';
        });
      },
      (error) => {
        console.log('Error')
      }
    )
  }
  ngOnInit() {
   this.route.params.subscribe(params => {
     let name = params['name'];
     this.getIssues(name);
   })
  }

  addNewComment(issue) {
    issue.comments.push(issue.newComment);
    issue.newComment = '';
  }

  createIssue() {
    let newIssue = { body: this.newIssueBody, comments: [] };
    this.issues.push(newIssue);
    this.newIssueBody = '';
  }
}
