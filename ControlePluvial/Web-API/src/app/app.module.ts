import { CadastroService } from './services/cadastro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WebApiComponent } from './web-api/web-api.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  declarations: [
    AppComponent,
    WebApiComponent
  ],
  imports: [
     CollapseModule.forRoot(), BsDropdownModule.forRoot(),
    // NgbModule.forRoot(),,
    Ng2GoogleChartsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
  }),
  ],
  providers: [CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
