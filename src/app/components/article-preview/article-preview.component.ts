import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { MAX_LENGTH_DESCRIPTION_PREVIEW } from 'src/app/tools/constants';


@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() article : Article = new Article();

  constructor() { }

  ngOnInit(): void {
  }

  displayDescription() : string {
    return this.article.description.split("\n").join(" ").slice(0,MAX_LENGTH_DESCRIPTION_PREVIEW)
  }
}
