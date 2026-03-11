/**
 * infer - 조건부 타입 내에서 타입 추론하기
 * inference : 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;
//infer R 은 조건식을 참으로 만드는 것을 추론한다

type A = ReturnType<FuncA> // string 타입으로 할당
type A1 = ReturnType<() => string> // string 타입으로 할당
// T : () => string
// infer R : string이 되어야 참인것을 추론

type B = ReturnType<FuncB> // number 타입으로 할당
// T : () => number
// infer R : number 되어야 참인것을 추론

type C = ReturnType<number> // never 타입으로 할당
// T : number
// infer R : 참을 추론할 수 있는 값이 없다

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>> // number

type PromiseB = PromiseUnpack<Promise<string>> //string

// 문제
type InferArrayType<T> = T extends (infer R)[] ? R : never;

const arr1 = [1, 2, 3];
const arr2 = ["hello", "myname", "winterlood"];
const arr3 = [1, true, "hi"];

let test1 : InferArrayType<typeof arr1>
let test2 : InferArrayType<typeof arr2>
let test3 : InferArrayType<typeof arr3>