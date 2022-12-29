import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutomotivePostModel } from '../blogapp-automotive/automotive_post.model';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs';
import { AutoBlogSection } from './auto-blog-section';
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
}