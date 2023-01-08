import { ProfileModel } from './../profile/profile.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutomotivePostModel } from '../blogapp-automotive/automotive_post.model';
import { Observable } from 'rxjs';
import { WebdevPostModel } from '../blogapp-webdev/webdev_post.model';
@Injectable({ providedIn: 'root' })
export class DataStorageService {


  constructor(
    private http: HttpClient
  ) {}


  fetchAutomotivePosts(): Observable<AutomotivePostModel[]> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    return this.http.get<AutomotivePostModel[]>(
      "http://localhost:8000/auto/blog/",
      httpOptions
    )
  }

  fetchAutomotivePostbyID(slug:string): Observable<AutomotivePostModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    return this.http.get<AutomotivePostModel>(
      "http://localhost:8000/auto/blog/" + slug + "/",
      httpOptions
    )
  }

  addAutoPost(autoPost: AutomotivePostModel): Observable<AutomotivePostModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    console.log(autoPost);

    return this.http.post<AutomotivePostModel>(
      "http://localhost:8000/auto/blog/",
      autoPost,
      httpOptions)
  }

  updateAutoPost(slug: string, newAutoPost: AutomotivePostModel): Observable<AutomotivePostModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    return this.http.put<AutomotivePostModel>(
      "http://localhost:8000/auto/blog/" + slug + "/",
      newAutoPost,
      httpOptions)
  }

  fetchWebdevPosts(): Observable<WebdevPostModel[]> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    return this.http.get<WebdevPostModel[]>(
      "http://localhost:8000/web/blog/",
      httpOptions
    )
  }

  fetchWebdevPostbyID(slug:string): Observable<WebdevPostModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    return this.http.get<WebdevPostModel>(
      "http://localhost:8000/web/blog/" + slug + "/",
      httpOptions
    )
  }

  addWebdevPost(webPost: WebdevPostModel): Observable<WebdevPostModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    console.log(webPost);

    return this.http.post<WebdevPostModel>(
      "http://localhost:8000/web/blog/",
      webPost,
      httpOptions)
  }

  updateWebdevPost(slug: string, newWebdevPost: WebdevPostModel): Observable<WebdevPostModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    return this.http.put<WebdevPostModel>(
      "http://localhost:8000/web/blog/" + slug + "/",
      newWebdevPost,
      httpOptions)
  }

  updateWebdevPostLikes(slug: string, newWebdevPost: WebdevPostModel): Observable<WebdevPostModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    
    return this.http.put<WebdevPostModel>(
      "http://localhost:8000/web/blog/" + slug + "/",
      newWebdevPost,
      httpOptions)
  }

  fetchAllProfile(): Observable<ProfileModel[]> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    
    return this.http.get<ProfileModel[]>(
      "http://localhost:8000/profile/all/",
      httpOptions)
  }

  fetchProfileByID(id:number): Observable<ProfileModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    
    return this.http.get<ProfileModel>(
      "http://localhost:8000/profile/" + id + "/",
      httpOptions)
  }
  addMyProfile(profile: ProfileModel): Observable<ProfileModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    console.log(profile);

    return this.http.post<ProfileModel>(
      "http://localhost:8000/profile/",
      profile,
      httpOptions)
  }

  updateMyProfile(id:number, newProfile: ProfileModel): Observable<ProfileModel> {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    return this.http.put<ProfileModel>(
      "http://localhost:8000/profile/" + id + "/",
      newProfile,
      httpOptions)
  }

  setProfileFromUserID(userID:number) {
    let token = JSON.parse(localStorage.getItem('access')!);
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + token,
         'Content-Type': 'application/json'
      })
    }
    
    return this.http.get<ProfileModel[]>("http://localhost:8000/profile/all/",httpOptions).subscribe((result) => {      
      result.forEach(element => {
        if (element.user == JSON.parse(localStorage.getItem("userid"))) {
          localStorage.setItem("profileid",element.id.toString())
        }
      });
    });
  }
}
