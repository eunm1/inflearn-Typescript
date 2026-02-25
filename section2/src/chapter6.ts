//any
//특정변수의 타입을 확실히 모를때 사용

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();

//런타임시 오류 발생 가능설 높음

let num: number = 10;
num =anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 사용불가
// unknownVar.toUpperCase() //사용불가

if(typeof unknownVar === "number"){ // 타입 정제
    num = unknownVar;
    //unknown 타입에 할당된 값이 확실할때 할당가능
}
