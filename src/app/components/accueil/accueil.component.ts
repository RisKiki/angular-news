import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { NB_BY_ROWS_ACCUEIL } from '../../tools/constants'
import {Router} from "@angular/router"
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  articles: Array<Article>
  nbByRow : number

  constructor(
    private router        : Router,
    private articleService: ArticleService
  ) { 
    this.nbByRow  = NB_BY_ROWS_ACCUEIL;
    this.articles = [];
   }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() : void {
    this.articleService.getArticles()
    .then(
      (articles : Array<Article>) => {
        this.articles = articles;
      }
    );
  }

  openArticle(article : Article) : void {
    this.articleService.setCurrentArticle(article);
    this.router.navigate(['/article', article.id]);
  }

}
