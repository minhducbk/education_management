export class User {
  id: string;
  email: string;
  name: string;

  constructor(obj){
    Object.assign(this, obj)
  }
  print(){
    console.log(this.email);
  }
}
