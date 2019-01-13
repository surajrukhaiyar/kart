import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatOptionModule, MatSelectModule, MatListModule,
  MatBadgeModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadItemComponent } from './upload-item/upload-item.component'


@NgModule({
  declarations: [
    AppComponent,
    MatNavComponent,
    CartComponent,
    CategoryComponent,
    DashboardComponent,
    UploadItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatInputModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, BrowserAnimationsModule, MatOptionModule, MatSelectModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }