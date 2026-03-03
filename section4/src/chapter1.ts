/**
 * 함수 타입 표현식
 * */

type Operation = (a:number, b:number)=> number;
const add0 = (a:number, b:number):number => a+b;
const add1 : (a:number, b:number)=> number = (a,b) => a+b;
const add : Operation = (a,b) => a+b; // 별칭을 이용해 함수의 타입을 선언하는 것
const sub : Operation = (a,b) => a-b;
const multi : Operation = (a,b) => a*b;
const div : Operation = (a,b) => a/b;

/**
 * 호출 시그니쳐(콜 시그니쳐)
 */

type Operation2 = {
    (a:number, b:number):number;
    num?:number; //하이브리드 타입 * function과 변수가 공존하는 type
    ///호출 시그니쳐는 함수 타입을 객체 타입 문법 안에 정의하여, 
    // 변수가 함수와 객체 속성을 동시에 가질 수 있는 하이브리드 타입을 만들 수 있게 해줘요.
    // 하이브리드 타입은 잘 사용하지 않음
}
const add2 : Operation2 = (a,b) => a+b; // 별칭을 이용해 함수의 타입을 선언하는 것
const sub2 : Operation2 = (a,b) => a-b;
const multi2 : Operation2 = (a,b) => a*b;
const div2 : Operation2 = (a,b) => a/b;

function func(a: number):void {}


add2(1,2);
add2.num
