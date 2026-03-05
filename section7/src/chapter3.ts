/**
 * 제네릭 인터페이스
 * 
 */

interface KeyPair<K, V>{ //제네릭 타입 변수
    key: K;
    value: V;
}

//제네릭 인터페이스는 타입으로 변수를 정의할 때
// 반드시 타입을 할당해야한다 
let keyPair:KeyPair<string, number>={
    key:"key",
    value:0,
}

let keyPair2:KeyPair<boolean, string[]> = {
    key:true,
    value:["1"],
}

/**
 * 인덱스 시그니처 + 제네릭
 */

//그냥 인덱스 시그니처
interface NumberMap{
    [key: string]:number;
}
let numberMap1: NumberMap = {
    key : -1231,
    key2 : 1245
}

//인덱스 시그니처에 제네릭 사용
interface Map<V>{
    [key: string]: V;
}

let stringMap : Map<string> = {
    key: "text"
}

let boolMap2 : Map<boolean> = {
    key: true
}

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
}

let stringMap2 : Map2<string> = {
    key : "text"
}

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저관리 프로그램
 * -> 유저 구분 : 학생유저/개발자유저
 */
enum userType{
    s = "student", 
    d = "developer"
}
interface Student{
    type: userType.s;
    school:string;
}

interface Developer{
    type: userType.d,
    skill:string;
}

interface User<T>{
    name: string;
    profile: T;
}

const developUser : User<Developer> = {
    name:"lee",
    profile: {
        type: userType.d,
        skill:"TypeScript"
    }
}

const studentUser : User<Student> = {
    name:"lee",
    profile: {
        type: userType.s,
        school:"무슨무슨"
    }
}

function goToSchool(user:User<Student | Developer>){
    if(user.profile.type !== userType.s){
        console.log("잘 못 오셨습니다.")
        return;
    }

    const school = user.profile.school;
    console.log(`${school} 등료 완료`)
}

function goToSchool2(user:User<Student>){
    const school = user.profile.school;
    console.log(`${school} 등료 완료`)
}

goToSchool(studentUser);
goToSchool(developUser);
// goToSchool2(developUser) // developer는 해당 함수 사용 불가
goToSchool2(studentUser);

// 제네릭 함수는 호출 시 인자로 타입을 추론하는 경우가 많지만, 
// 제네릭 인터페이스나 타입 별칭은 사용할 때 `<MyType>`처럼 명시적으로 타입을 지정해주는 방식이 일반적입니다.