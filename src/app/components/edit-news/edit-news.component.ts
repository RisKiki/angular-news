import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  articles : Array<Article>;

  article: Article;
  creationForm : FormGroup;


  constructor(
    private articleService : ArticleService,
    private router        : Router,
  ) {
    this.articles = this.articleService.articles;
    this.article = this.articleService.getCurrentArticle();
    console.log(this.article)
    this.creationForm = new FormGroup({
      title      : new FormControl(this.article.title, [Validators.required]),
      image      : new FormControl(this.article.image, [Validators.required]),
      description: new FormControl(this.article.description, [Validators.required])
    });
    this.onPreview();
  }

  ngOnInit(): void {
  }

  init() : void {
    if (this.article) {
      const article = this.article as Article
      this.creationForm = new FormGroup({
        title      : new FormControl(this.article.title, [Validators.required]),
        image      : new FormControl(this.article.image, [Validators.required]),
        description: new FormControl(this.article.description, [Validators.required])
      });
    }
  }

  onSubmit() : void {
    if (this.article)
      this.setArticleFromForm();
      this.articleService.updateArticle(this.article)
      .then(
        (article : Article) => {
          this.article = article;
          this.articleService.setCurrentArticle(this.article);
          this.router.navigate(['/article', this.article.id]);
        }
      );
    
  }

  onPreview() : void { 
    this.setArticleFromForm();
    this.articleService.setCurrentArticle(this.article);
  }

  setArticleFromForm() : void {
    this.article.title       = this.creationForm.value.title
    this.article.description = this.creationForm.value.description
    this.article.image       = this.creationForm.value.image
  }

}
