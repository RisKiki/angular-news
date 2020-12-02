import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

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
    private articleService: ArticleService
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
