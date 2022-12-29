
export class WebdevPostModel {
  public slug: string;
  public title: string;
  public description: string;
  public content: string;
  public owner: number;
  public liked_by: number[];

  constructor(slug: string,title: string, description: string,content: string,owner: number,liked_by: number[]) {
    this.slug = slug;
    this.title = title;
    this.description = description;
    this.content = content;
    this.owner = owner;
    this.liked_by = liked_by;
  }
}



