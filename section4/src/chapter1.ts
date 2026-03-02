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
}
const add2 : Operation2 = (a,b) => a+b; // 별칭을 이용해 함수의 타입을 선언하는 것
const sub2 : Operation2 = (a,b) => a-b;
const multi2 : Operation2 = (a,b) => a*b;
const div2 : Operation2 = (a,b) => a/b;

function func(a: number):void {}
