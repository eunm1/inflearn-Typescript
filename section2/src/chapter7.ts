// void : 아무것도 없음(공허)를 의미하는 타입

function func1(): string{ //반환값이 string임을 지정
    return "hello";
}

function func2(): void{//아무것도 반환하지 않음을 선언
    console.log("ttest")
}

function func3(): undefined{//아무것도 반환하지 않음을 선언
    console.log("ttest")
    // return //return시 빈값, undefined 혹은 선언하지 않아야 한다
}

function func4(): null{
    return null;
}

let a : void;
// a = 1; // 사용불가
// a = 'hello' //사용불가
a = undefined // 사용가능

//never : 존재하지 않는 불가능한 타입
//반환하지 못하는 경우
// 이 함수에서 반환하는 것이 모순이다 라는 의미
function func5(): never{
    while(true) {}
}

//무조건 에러를 반환하는 경우
function func6(): never{
    throw new Error();
}

let b : never;
// 아무런 값을 담을 수 없는 타입
// b = 1; // 사용불가
// b = 'hello' //사용불가
// b = undefined // 사용불가
// b = null; // 사용불가
let c : any;
// b = c // 사용불가