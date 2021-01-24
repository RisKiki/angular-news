import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccueilComponent } from './components/accueil/accueil.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './components/article/article.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { EditorModule } from "@tinymce/tinymce-angular";
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { Error404Component } from './components/error404/error404.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    LoginComponent,
    EditNewsComponent,
    ArticleComponent,
    ArticlePreviewComponent,
    CreateNewsComponent,
    Error404Component,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    AngularEditorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    EditorModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
