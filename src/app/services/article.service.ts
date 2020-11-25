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
  }

  
  reloadArticles() : Promise<Array<Article>> {
    return this.requestApiService.get('articles/all')
    .then(
      (res : any) => {
        const articles : Array<Article> = Article.asArticles(res.data)
        this.articles = articles;
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
 
  getArticle(articleId : number) : Article {
    const index : number = this.articles.findIndex(
      (article : Article) => 
        article.id === articleId
    )
    return this.articles[index]
  }

  addArticle(article : Article) : Promise<Article> {
    return this.requestApiService.post('articles/create', article.asJson())
    .then(
      (res : any) => {
        const article : Article = Article.asArticle(res['data']);
        this.articles.push(article);
        return article;
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
