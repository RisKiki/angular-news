import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

import { Tools } from '../tools/tools';
import { RequestApiService } from './request-api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  articles : Array<Article>;

  currentArticle : Article;

  constructor(
    private requestApiService : RequestApiService
  ) { 
    this.articles = [];
    this.currentArticle = new Article(Tools.generateFackId());
    this.initArticles()
  }

  
  initArticles() : void {
    this.requestApiService.get('articles/all').subscribe(
      (x : any) => {
        if (x.status.success === 1) {
          this.articles = Article.asArticles(x.data)
        } else {
          console.error(new Error('Erreur on the route articles/all'), x.error);
        }
      }
    )
  }

  getArticles() : Array<Article> {
    return this.articles;
  }
 
  getArticle(articleId : number) : Article {
    const index : number = this.articles.findIndex(
      (article : Article) => 
        article.id === articleId
    )
    return this.articles[index]
  }

  addArticle(article : Article) : void {
    this.articles.push(article)
  }

  setCurrentArticle(article : Article) : void {
    this.currentArticle = article;
  }

  getCurrentArticle() : Article {
    return this.currentArticle;
  }
}
