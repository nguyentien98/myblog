import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Title }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailComponent } from './Post/detail/detail.component';
import { ApiService } from './Services/api.service';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
      path: 'bai-viet/:slug',
      component: DetailComponent
    },
    {
    	path: '',
    	component: IndexComponent
    }
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ApiService,
  Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
