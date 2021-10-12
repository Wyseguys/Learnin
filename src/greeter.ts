class Student
{
    fullname: string;
    constructor(
        public firstname: string,
        public middlename: string,
        public lastname: string
    ){
        this.fullname = firstname + " " + middlename + " "+ lastname;
    }
}


interface person {
    firstname: string;
    lastname: string
}


function greeter(person: Student) {
    return "Hello There, " + person.firstname + " " + person.middlename + " "  + person.lastname;
  }
   
  let user = new Student("Mr Christer", "Lee", "Zwemke");
   
  document.body.textContent = greeter(user);