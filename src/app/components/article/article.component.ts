import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { LoginService } from 'src/app/services/login.service';

import { Maybe } from 'src/app/tools/type';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Maybe<Article>;

  constructor(
    private routeActivated: ActivatedRoute,
    private router        : Router,
    private articleService: ArticleService,
    private loginService  : LoginService
  ) {
  }

  ngOnInit(): void {
    this.initArticle();
  }

  initArticle() : void {
    const params = this.routeActivated.snapshot.params
    if (params['articleId']){
      this.articleService.getArticle(params['articleId'])
      .then(
        (article : Maybe<Article>) => {
          this.article = article
        }
      );
    }
    else {
      this.article = this.articleService.getCurrentArticle();
    }
  }

  isLogged() : boolean {
    this.routeActivated.snapshot.url.filter((x : any) => x.path === "edit")
    return this.loginService.isLogged() && this.routeActivated.snapshot.url.filter((x : any) => x.path === "edit" || x.path ==='create').length === 0;
  }

  editNewsClick(event : Event) : void {
    this.router.navigate(['/edit']);
  }

  getTitleCurrentArticle() : string {
    if (this.article) 
      return this.article.title

    return this.articleService.getCurrentArticle().title
  }

  getImageCurrentArticle() : string {
    if (this.article)
      return this.article.image

    return this.articleService.getCurrentArticle().image
  }

  getDescriptionCurrentArticle() : string {
    if (this.article)
      return this.article.description

    return this.articleService.getCurrentArticle().description
  }

}
