/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * 상호간에 약속된 규칙
 * 객체의 구조를 정의하는데 특화된 문법(상속, 합침등의 특수한 기능 제공)
 */

interface Person{
    readonly name: string;
    age?: number;
    sayHi(): void; // : 호출 시그니처
    // sayHi: ()=> void // : 화살표 함수 문법으로 호출해도 된다
    sayHi(a:number, b:number): void;
    // sayHi: (a:number, b:number)=> void //이건 화살표 함수 문법으로 동일명의 함수 생성은 불가하다
}

//** 인터페이스 객체를 union or intersection하는 경우는 type 함수를 사용해야한다 */
// 인터페이스 객체 자체에 union 불가
type Type1 = number | Person;
type Type2 = number & Person;

const person: Person | string = {
    name: "kim",
    age: 27,
    sayHi: function(){
        console.log("Hi")
    }
}

person.sayHi()
person.sayHi(1,2)


/**
type Func = {
    (): void;
}

const func: Func = () => {};
 */