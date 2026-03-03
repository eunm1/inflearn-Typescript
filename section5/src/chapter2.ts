/**
 * 선언 합침
 */

//동일한 이름으로 중복선언 가능
// 중복선언된 모든 interface는 하나의 인터페이스처럼 합쳐진다
// 동일명의 프로퍼티가 다른 타입을 가지는 경우 충돌이 발생하여 오류 발생한다 (서브타입을 허용하지 않는다 - 무조건 동일한 타입만)
interface Person {
    name: string;
}

interface Person {
    name: string;
    // name: ""; // 서브 리터럴 타입으로 불가
    age: number;
}

interface Developer extends Person{
    name: "hello"; // 확장으로 된 경우 동일 타입 or 서브 리터럴 타입으로 재정의 가능
}

const person: Person = {
    name: "",
    age: 27
}

/**
 * 모듈 보강
 */
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string
}

const lib : Lib = {
    a : 1,
    b : 2,
    c : "3" // 두번째 Lib 인터페이스를 선언해서 보강해주는 것
}