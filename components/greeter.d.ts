declare class Student {
    firstname: string;
    middlename: string;
    lastname: string;
    fullname: string;
    constructor(firstname: string, middlename: string, lastname: string);
}
interface person {
    firstname: string;
    lastname: string;
}
declare function greeter(person: Student): string;
declare let user: Student;
//# sourceMappingURL=greeter.d.ts.map