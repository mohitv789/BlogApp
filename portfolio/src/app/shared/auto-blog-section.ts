export class AutoBlogSection {
  public title: string;
  public description: string;
  public problem: string;
  public ref_image: string;
  public solution: string;
  public owner: number;

  constructor(title: string, description: string,problem: string, ref_image: string,solution: string,owner: number) {
    this.title = title;
    this.description = description;
    this.problem = problem;
    this.ref_image = ref_image;
    this.solution = solution;
    this.owner = owner;
  }
}
