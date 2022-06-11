import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphViewComponent } from './graph-view/graph-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { TableViewComponent } from './table-view/table-view.component';
import { SendCompletedModalComponent } from './transaction-box/send-completed-modal/send-completed-modal.component';
import { TransactionBoxComponent } from './transaction-box/transaction-box.component';

import { MatIconModule } from '@angular/material/icon';
import { RightViewComponent } from './right-view/right-view.component'
import { NgChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    GraphViewComponent,
    SideNavComponent,
    HeaderComponent,
    TableViewComponent,
    RightViewComponent,
    TransactionBoxComponent,
    SendCompletedModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgChartsModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
