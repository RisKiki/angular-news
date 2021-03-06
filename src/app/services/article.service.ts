import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

import { Tools } from '../tools/tools';
import { Maybe } from '../tools/type';
import { RequestApiService } from './request-api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles      : Array<Article>;
  currentArticle: Article;

  constructor(
    private requestApiService : RequestApiService,
  ) { 
    this.articles       = [];
    this.currentArticle = new Article(Tools.generateFackId());
    this.reloadArticles();
  }

  
  reloadArticles() : Promise<Array<Article>> {
    return this.requestApiService.get('articles/all')
    .then(
      (res : any) => {
        const articles : Array<Article> = Article.asArticles(res.data)
        this.articles = articles;
        if (this.articles.length > 0)
          this.setCurrentArticle(this.articles[0]);
        return articles
      }
    )
  }

  getArticles() : Promise<Array<Article>> {
    if (this.articles.length === 0) {
      return this.reloadArticles()
    } else {
      return Promise.resolve(this.articles);
    }
  }
 
  getArticle(articleId : number) : Promise<Maybe<Article>> {
    return this.getArticles()
    .then(
      (articles) => {
        return articles.find(
          (article : Article) => 
            article.id === articleId
        )
      }
    )
  }

  addArticle(article : Article) : Promise<Article> {
    return this.requestApiService.post('articles/create', article.asJson())
    .then(
      (res : any) => {
        const article : Article = Article.asArticle(res['data']);
        this.articles.push(article);
        this.setCurrentArticle(article);
        return article;
      }
    )
  }

  updateArticle(article : Article) : Promise<any> {
    return this.requestApiService.post('articles/update', article.asJson())
    .then(
      (res : any) => {
        return res;
      }
    )
  }

  setCurrentArticle(article : Article) : void {
    this.currentArticle = article;
  }

  getCurrentArticle() : Article {
    return this.currentArticle;
  }
}
