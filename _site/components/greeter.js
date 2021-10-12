"use strict";
class Student {
    constructor(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + " " + middlename + " " + lastname;
    }
}
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.middlename + " " + person.lastname;
}
let user = new Student("Mr Christer", "Lee", "Zwemke");
var el = document.getElementsByTagName('H1');
var FUCKYOU = greeter(user).toString();
el[0].innerHTML = FUCKYOU;
//# sourceMappingURL=greeter.js.map