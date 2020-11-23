import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

import { Tools } from '../tools/tools';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  articles : Array<Article>;

  currentArticle : Article;

  constructor() { 
    this.articles = this.initArticles();
    this.currentArticle = new Article(Tools.generateFackId());
  }

  
  initArticles() : Array<Article> {
    return [
      new Article(
        1,
        "Angular",
        "Angular est un framework développer par Google.",
        "https://www.ambient-it.net/wp-content/uploads/2019/04/whats-new-in-angular-min.jpg"
      ),
      new Article(
        2,
        "React",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh ut sapien consectetur venenatis sit amet id felis. In vitae erat tincidunt, gravida est non, efficitur lacus. Duis vitae varius neque. Sed ut auctor mauris. Sed placerat nec turpis vitae tristique. Pellentesque sit amet libero vel velit sollicitudin venenatis et ac dolor. Duis nec consequat elit, in laoreet mi. \n Sed efficitur arcu sit amet lectus ultricies finibus. Aliquam erat volutpat. Sed mi eros, dignissim at lacinia non, tincidunt faucibus eros. Integer finibus elementum malesuada. Suspendisse enim augue, volutpat ac urna et, sagittis pretium elit. Pellentesque ullamcorper vestibulum nulla..",
        "https://www.ambient-it.net/wp-content/uploads/2019/04/whats-new-in-angular-min.jpg"
      ),
      new Article(
        3,
        "VueJs",
        "Angular est un framework développer par Google.",
        "https://www.ambient-it.net/wp-content/uploads/2019/04/whats-new-in-angular-min.jpg"
      ),
      new Article(
      4,
      "Toto",
      "Angular est un framework développer par Google.",
      "https://www.ambient-it.net/wp-content/uploads/2019/04/whats-new-in-angular-min.jpg"
      ),
      // new Article(
      //   5,
      //   "Tata",
      //   "Angular est un framework développer par Google.",
      //   "https://www.ambient-it.net/wp-content/uploads/2019/04/whats-new-in-angular-min.jpg"
      // )               
    ]
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
