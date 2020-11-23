import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ArticleComponent } from './components/article/article.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"accueil", component:AccueilComponent},
  {path:"create", component:CreateNewsComponent},
  {path:"edit", component:EditNewsComponent},
  {path:"login", component:LoginComponent},
  {path:"article/:articleId", component:ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
