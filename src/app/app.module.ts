import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { ArticleComponent } from './article/article.component';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    TabsComponent,
    TabComponent,
    ArticleComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
