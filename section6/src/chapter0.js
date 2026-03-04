/**
 * 클래스
 * 객체를 만드는 틀 : 중복되는 요소를 동일하게 만들어주는 것
 * 붕어빵 틀 같은 것
 */

// 이건 객체
let studentA = {
    name: "kim",
    grade: "A+",
    age: 30,
    study(){
        console.log("test")
    }
}

class Student {
    // 필드
    name;
    grade;
    age;

    //생성자
    constructor (name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    study(){
        console.log("test")
    }

    introduce(){
        console.log(`hello ${this.name}`)
    }
}

class StudentDeveloper extends Student{ 
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill){
        super(name, grade, age); // 부모클래스의 생성자가 호출되어 프로퍼티 값으로 설정됨
        this.favoriteSkill = favoriteSkill;
    }
    
    programing(){
        console.log(`my skill ${this.favoriteSkill}`)
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let studentB = new Student("kim", "A+", 27)
console.log(studentB)
studentB.introduce()
studentB.study()

const studentDeveloper = new StudentDeveloper("kim", "A", 20, "test");
studentDeveloper.programing()