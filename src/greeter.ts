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
    return "Hello, " + person.firstname + " " + person.middlename + " "  + person.lastname;
  }
   
  let user = new Student("Mr Christer", "Lee", "Zwemke");
   
  var el = document.getElementsByTagName('H1');
  var FUCKYOU = greeter(user).toString();
  el[0].innerHTML  = FUCKYOU;