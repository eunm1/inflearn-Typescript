/**
 * 접근 제어자
 * 클래스를 만들때 특정 클래스나 메서드에 접근할수있게 하는 제어자
 * access modifier
 * => public private proteced
 */

class Employee { //type으로도 활용이 가능하다

    // 방법 1 필드와 생성자 모두 작성
    // private name: string;
    // protected age: number;
    // public position: string;

    // constructor(name:string, age:number, position:string){
    //     this.name = name;
    //     this.age = age;
    //     this.position = position
    // }

    //방법 2 생성자로 필드와 할당을 한꺼번에 처리
    constructor(
        private name:string, 
        protected age:number, 
        public position:string
    ){ }

    //메서드
    work(){
        this.name = "ere";
        this.age = 22
        console.log(`${this.name} ${this.age} work`) //private는 해당 메서드 내에서는 사용가능
    }
}

class ExecutiveOfficer extends Employee{
    //필드
    officeNumber: number;

    //생성자
    constructor(naem:string, age:number, position:string, officeNumber:number){
        super(naem, age, position)
        this.officeNumber = officeNumber;
    }

    func(){
        // this.name // private 는 자식 클래스에서 사용 불가하다
        this.age = 30 // protected는 자식 클래스에서 사용 가능하다
        this.position;
    }
}

const employee = new Employee("kim", 40, "developer");
// employee.name="lee"; //private는 인스턴스에서 할당 불가하다
// employee.age = 30; // protected는 인스턴스에서 할당 불가하다
employee.position="player"

console.log(employee)