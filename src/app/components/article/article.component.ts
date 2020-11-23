import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { ETypeArticleView } from 'src/app/tools/enums';
import { Tools } from 'src/app/tools/tools';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  @Input() type: ETypeArticleView = ETypeArticleView.DISPLAY;

  constructor(
    private routeActivated: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.article = this.initArticle();
  }

  ngOnInit(): void {
  }

  initArticle() : Article {
    return this.articleService.getCurrentArticle()
  }

  isCreate() : boolean {
    return this.type === ETypeArticleView.CREATE;   
  }

  getTitleCurrentArticle() : string {
    return this.articleService.getCurrentArticle().title
  }

  getImageCurrentArticle() : string {
    return this.articleService.getCurrentArticle().image
  }

  getDescriptionCurrentArticle() : string {
    return this.articleService.getCurrentArticle().description
  }

}
