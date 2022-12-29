import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogappWebdevComponent } from './blogapp-webdev/blogapp-webdev.component';
import { BlogappAutomotiveComponent } from './blogapp-automotive/blogapp-automotive.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BlogappAutomotiveListComponent } from './blogapp-automotive/blogapp-automotive-list/blogapp-automotive-list.component';
import { BlogappAutomotiveItemComponent } from './blogapp-automotive/blogapp-automotive-list/blogapp-automotive-item/blogapp-automotive-item.component';
import { BlogappAutomotiveDetailComponent } from './blogapp-automotive/blogapp-automotive-detail/blogapp-automotive-detail.component';
import { AutomotiveService } from './blogapp-automotive/automotive.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogappAutomotiveEditComponent } from './blogapp-automotive/blogapp-automotive-edit/blogapp-automotive-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutomotiveSectionListComponent } from './blogapp-automotive/blogapp-automotive-detail/automotive-section-list/automotive-section-list.component';
import { AutomotiveSectionItemComponent } from './blogapp-automotive/blogapp-automotive-detail/automotive-section-list/automotive-section-item/automotive-section-item.component';
import { AutomotiveSectionDetailComponent } from './blogapp-automotive/blogapp-automotive-detail/automotive-section-detail/automotive-section-detail.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { BlogappWebdevItemComponent } from './blogapp-webdev/blogapp-webdev-list/blogapp-webdev-item/blogapp-webdev-item.component';
import { BlogappWebdevDetailComponent } from './blogapp-webdev/blogapp-webdev-detail/blogapp-webdev-detail.component';
import { BlogappWebdevListComponent } from './blogapp-webdev/blogapp-webdev-list/blogapp-webdev-list.component';
import { BlogappWebdevEditComponent } from './blogapp-webdev/blogapp-webdev-edit/blogapp-webdev-edit.component';
import { WebdevService } from './blogapp-webdev/webdev.service';
import { QuillModule } from 'ngx-quill';
import { WebdevLikeComponent } from './blogapp-webdev/blogapp-webdev-detail/webdev-like/webdev-like.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogappWebdevComponent,
    BlogappAutomotiveComponent,
    HeaderComponent,
    AboutComponent,
    BlogappAutomotiveListComponent,
    BlogappAutomotiveItemComponent,
    BlogappAutomotiveDetailComponent,
    BlogappAutomotiveEditComponent,
    AutomotiveSectionListComponent,
    AutomotiveSectionItemComponent,
    AutomotiveSectionDetailComponent,
    BlogappWebdevItemComponent,
    BlogappWebdevDetailComponent,
    BlogappWebdevListComponent,
    BlogappWebdevEditComponent,
    WebdevLikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot({
			modules: {
				syntax: false,
				toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ["blockquote", "code-block"],
          [{ size: ["small", false, "large", "huge"] }],
					[{ list: 'ordered' }, { list: 'bullet' }],
					[{ indent: '-1' }, { indent: '+1' }],
          [{ 'color': [] }, { background: [] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ["clean"],
				]
			}
		}),
  ],
  providers: [
    AutomotiveService,
    WebdevService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
