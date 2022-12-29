import { AutoBlogSection } from "../shared/auto-blog-section";

export class AutomotivePostModel {
  public slug: string;
  public title: string;
  public description: string;
  public created_at: Date;
  public last_edited: Date;
  public poster: string;
  public sections: AutoBlogSection[];
  public owner: number;

  constructor(slug: string,title: string, description: string,poster: string,sections: AutoBlogSection[],created_at: Date,last_edited: Date,owner: number) {
    this.slug = slug;
    this.title = title;
    this.description = description;
    this.poster = poster;
    this.sections = sections;
    this.created_at = created_at;
    this.last_edited = last_edited;
    this.owner = owner;
  }
}



