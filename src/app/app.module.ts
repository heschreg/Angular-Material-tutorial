import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NotificationBadgeComponentComponent } from './notification-badge-component/notification-badge-component.component';
import { TooltipDelayExampleComponent } from './tooltip-delay-example/tooltip-delay-example.component';
import { MultilineTooltipComponent } from './multiline-tooltip/multiline-tooltip.component';
import { DatepipeComponent } from './datepipe/datepipe.component';
import {CustomDatePipe} from './datepipe/custom.datepipe';
import { DateExamplesComponent } from './date-examples/date-examples.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { MenuExamplesComponent } from './menu-examples/menu-examples.component';
import { BatchExamplesComponent } from './batch-examples/batch-examples.component';
import { MenuExampleMenuContentComponent } from './menu-example-menu-content/menu-example-menu-content.component';
@NgModule({
  declarations: [
    AppComponent,
    NotificationBadgeComponentComponent,
    TooltipDelayExampleComponent,
    MultilineTooltipComponent,
    DatepipeComponent,
    CustomDatePipe,
    DateExamplesComponent,
    SimpleTableComponent,
    MenuExamplesComponent,
    BatchExamplesComponent,
    MenuExampleMenuContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
