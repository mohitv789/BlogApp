import { ProfileResolverService } from './profile/profile-resolver.service';
import { MyprofileDetailComponent } from './profile/myprofile-detail/myprofile-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth.guard';
import { AutomotiveResolverService } from './blogapp-automotive/automotive-resolver.service';
import { BlogappAutomotiveDetailComponent } from './blogapp-automotive/blogapp-automotive-detail/blogapp-automotive-detail.component';
import { BlogappAutomotiveEditComponent } from './blogapp-automotive/blogapp-automotive-edit/blogapp-automotive-edit.component';
import { BlogappAutomotiveListComponent } from './blogapp-automotive/blogapp-automotive-list/blogapp-automotive-list.component';
import { BlogappAutomotiveComponent } from './blogapp-automotive/blogapp-automotive.component';
import { BlogappWebdevDetailComponent } from './blogapp-webdev/blogapp-webdev-detail/blogapp-webdev-detail.component';
import { BlogappWebdevEditComponent } from './blogapp-webdev/blogapp-webdev-edit/blogapp-webdev-edit.component';
import { BlogappWebdevListComponent } from './blogapp-webdev/blogapp-webdev-list/blogapp-webdev-list.component';
import { BlogappWebdevComponent } from './blogapp-webdev/blogapp-webdev.component';
import { WebdevResolverService } from './blogapp-webdev/webdev-resolver.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MyProfileEditComponent } from './profile/my-profile-edit/my-profile-edit.component';
import { OtherProfileDetailComponent } from './profile/other-profile-detail/other-profile-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  {
    path: 'web',
    component: BlogappWebdevComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BlogappWebdevListComponent
      },
      {
        path: 'new',
        component: BlogappWebdevEditComponent
      },
      {
        path: ':id',
        component: BlogappWebdevDetailComponent,
        resolve: [WebdevResolverService]
      },
      {
        path: ':id/edit',
        component: BlogappWebdevEditComponent,
        resolve: [WebdevResolverService]
      }
    ]
  },
  {
    path: 'auto',
    component: BlogappAutomotiveComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BlogappAutomotiveListComponent
      },
      {
        path: 'new',
        component: BlogappAutomotiveEditComponent
      },
      {
        path: ':id',
        component: BlogappAutomotiveDetailComponent,
        resolve: [AutomotiveResolverService]
      },
      {
        path: ':id/edit',
        component: BlogappAutomotiveEditComponent,
        resolve: [AutomotiveResolverService]
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: MyProfileEditComponent
      },
      {
        path: 'other',
        component: OtherProfileDetailComponent,
        resolve: [ProfileResolverService]
      },
      {
        path: 'mine',
        component: MyprofileDetailComponent,
        resolve: [ProfileResolverService]
      },
      {
        path: 'mine/edit',
        component: MyProfileEditComponent,
        resolve: [ProfileResolverService]
      }
    ]
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(
      m => m.AuthModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
