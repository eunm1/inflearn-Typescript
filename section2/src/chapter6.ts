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
//비교적 안전한 any
//any 처럼 모든 값을 담을 수 있지만 타입 정제 전까지는 다음 변수에 할당하거나 메서드를 호출할 수 없다
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
