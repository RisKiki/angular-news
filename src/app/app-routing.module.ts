import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ArticleComponent } from './components/article/article.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"accueil", component:AccueilComponent},
  {path:"about", component:AboutComponent},
  {path:"create", component:CreateNewsComponent},
  {path:"edit", component:EditNewsComponent},
  {path:"login", component:LoginComponent},
  {path:"contact", component:ContactComponent},
  {path:"article/:articleId", component:ArticleComponent},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
