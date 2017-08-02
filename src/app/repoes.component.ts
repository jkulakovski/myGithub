import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import * as _ from "lodash";

import { Repo } from './repo';
import { Issue } from './issues'
import  { RepoService } from './repo.service';


@Component({
  selector: 'my-repoes',
  templateUrl: './repoes.component.html',
  styleUrls: ['./repoes.component.css']
})
export class RepoesComponent implements OnInit {
  title = 'Represitories';
  repoes:Repo[] = [];
  languages = ['All language','PHP','JavaScript','HTML','Ruby','Java','Objective-C','Jupyter Notebook','Python'];

  constructor(private repoService:RepoService,
              private router:Router) {
  }

  getAll():void {
    this.repoService.getAll().subscribe(
      (data) => {
        this.repoes = data;
        this.repoes.forEach((item) => {
          item['isVisible'] = true;
          item['isEditable'] = false
        });
      },
      (error) => {
        console.log('Error')
      }
    )
  }

  ngOnInit():void {
    this.getAll();
  }


  gotoDetail(repo):void {
    let navigationExtras:NavigationExtras = { queryParams: repo };
    this.router.navigate(['/detail', repo.id], navigationExtras);
  }

  gotoIssues(repo):void {
    this.router.navigate(['/issues', repo.name])
  }

  changeEditable(repo){
    repo.isEditable = !repo.isEditable;
  }



  delete(repo:Repo):void {
    this.repoes = this.repoes.filter((item) => {
      return item.id !== repo.id})
  }

  sortRepoes(isReverse): void {
    this.repoes = _.orderBy(this.repoes, ['name'], ['asc'])
    if(isReverse){
      this.repoes.reverse();
    }
  }

  filterByLanguage(language): void {
    this.repoes.forEach((item) => {
      if (item.language == language){
        item['isVisible'] = true
      } else{
        item['isVisible'] = false
      }
      if (language == 'All language'){
        item['isVisible'] = true
      }
    })
  }
}
