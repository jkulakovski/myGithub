import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Repo } from './repo';

@Component({
  selector: 'repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: [ './repo-detail.component.css' ]
})
export class RepoDetailComponent implements OnInit {
  repo: any = {};
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.repo = params;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
