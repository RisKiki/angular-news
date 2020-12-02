import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { Tools } from 'src/app/tools/tools';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  article : Article;

  creationForm : FormGroup;

  constructor(
    private articleService : ArticleService,
    private router        : Router,
  ) { 
    this.article = new Article(Tools.generateFackId(),'Titre','Description','https://www.iogazette.fr/blog/wp-content/uploads/2018/03/no-image.png');
    this.creationForm = new FormGroup({
      title      : new FormControl(this.article.title, [Validators.required]),
      image      : new FormControl(this.article.image, [Validators.required]),
      description: new FormControl(this.article.description, [Validators.required])
    });
    this.onPreview();
  }

  ngOnInit(): void {
  }

  onSubmit() : void {
    this.setArticleFromForm();
    this.articleService.addArticle(this.article)
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
