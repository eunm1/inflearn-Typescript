/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "kim",
    age: 20,
    position: "developer",
    work(){
        console.log("work")
    }
}

class Employee { //type으로도 활용이 가능하다
    name: string;
    age: number;
    position: string;

    constructor(name:string, age:number, position:string){
        this.name = name;
        this.age = age;
        this.position = position
    }

    //메서드
    work(){
        console.log("work")
    }
}

const employeeB = new Employee("kim", 30, "developer");
console.log(employeeB)

const employeeC : Employee = {
    name: "",
    age: 0,
    position: "",
    work(){}
}

class ExecutiveOfficer extends Employee{
    //필드
    officeNumber: number;

    //생성자
    constructor(naem:string, age:number, position:string, officeNumber:number){
        super(naem, age, position)
        this.officeNumber = officeNumber;
    }
}
