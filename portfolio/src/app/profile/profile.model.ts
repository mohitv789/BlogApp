
export class ProfileModel {
    public user: number;
    public gender: string;
    public first_name: string;
    public last_name: string;
    public city: string;
    public url: string;
    public avatar: string;
    public bio: string;
  
    constructor(user: number,gender: string, first_name: string,last_name: string,city: string,url: string,avatar: string,bio: string,) {
      this.user = user;
      this.gender = gender;
      this.first_name = first_name;
      this.last_name = last_name;
      this.city = city;
      this.url = url;
      this.avatar = avatar;
      this.bio = bio;
    }
  }
  
  
  
  