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
    return "Hello There You Big Hairy, " + person.firstname + " " + person.middlename + " " + person.lastname;
}
let user = new Student("Mr Christer", "Lee", "Zwemke");
document.body.textContent = greeter(user);
//# sourceMappingURL=greeter.js.map