import { NavComponent } from './components/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoxScrollDirective } from './directives/rox-scroll/rox-scroll.directive';
import { ContainerComponent } from './container.component';
import { MainComponent } from './views/main/main.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { CopyButtonComponent } from './components/copy-button/copy-button.component';
import { ClipboardModule } from 'ngx-clipboard';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RoxScrollDirective,
    ContainerComponent,
    MainComponent,
    PortfolioComponent,
    NavComponent,
    HeaderComponent,
    CustomButtonComponent,
    AboutComponent,
    WorkComponent,
    TestimonialsComponent,
    ContactComponent,
    CopyButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FlexLayoutModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
