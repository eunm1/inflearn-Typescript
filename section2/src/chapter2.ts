let numArr: number[] = [1,2,3];
let strArr: string[] = ['hello', 'world', 'Ts'];
let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];
let multiArr2: Array<number | string> = [1, "hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][]=[
    [1,2,3]
    ,[4,5]
]
let doubleArr2: (number | string)[][]=[
    [1,'2',3]
    ,['5',4]
]

//튜플 : 길이와 타입이 고정된 배열
//별도의 자료형이라고 보기는 어렵고 배열의 일종이다
let tup1: [number, number] = [1,3];
// tup1 = [1,2,3] 불가
// tup1 = ['1','2'] 불가

let tup2: [number, string, boolean] = [1, "2", true];
// 배열안에 타입의 위치와 길이가 중요하다

// push, pop을 해도 문제가 없다
// tup2.push(1);
// tup2.pop();

const users: [string, number][] = [
    ["kim", 1]
    ,["eun", 2]
    ,['mi', 3]
    //,[4,"22"] <= string, number 위치가 맞지 않아 오류 발생
]