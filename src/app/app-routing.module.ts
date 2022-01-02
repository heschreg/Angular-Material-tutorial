import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepipeComponent } from './datepipe/datepipe.component';
import { MultilineTooltipComponent } from './multiline-tooltip/multiline-tooltip.component';
import { NotificationBadgeComponentComponent } from './notification-badge-component/notification-badge-component.component';
import { TooltipDelayExampleComponent } from './tooltip-delay-example/tooltip-delay-example.component';
import { DateExamplesComponent } from './date-examples/date-examples.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { MenuExamplesComponent } from './menu-examples/menu-examples.component';
import { BatchExamplesComponent } from './batch-examples/batch-examples.component';
import { MenuExampleMenuContentComponent } from './menu-example-menu-content/menu-example-menu-content.component';

const routes: Routes = [
  {path: '7' , component: MenuExampleMenuContentComponent },
  {path: '' , component: MenuExamplesComponent },
  {path: '6', component: SimpleTableComponent },
  {path: '5', component: DateExamplesComponent },
  {path: '4', component: DatepipeComponent },
  {path: '3', component: MultilineTooltipComponent },
  {path: '2', component: TooltipDelayExampleComponent},
  {path: '1', component: NotificationBadgeComponentComponent},
  {path: '0', component: BatchExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// DateExamplesComponent
