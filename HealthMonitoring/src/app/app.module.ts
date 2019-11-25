import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionHealthComponent } from '../app/sections/section-health/section-health.component';
import { SectionOrdersComponent } from '../app/sections/section-orders/section-orders.component';
import { SectionSalesComponent } from '../app/sections/section-sales/section-sales.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionHealthComponent,
    SectionOrdersComponent,
    SectionSalesComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
