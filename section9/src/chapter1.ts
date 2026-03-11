/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let varA : StringNumberSwitch<number | string>;
// 타입을 union으로 설정하면 number 조건식도 수행하고 string 조건식도 수행해서
// number | string이 T로 들어가지 않고 따로 분리되어 T로 들어간다
// varA의 타입이 number | string이 된다

/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean , string>;
// 분리된 조건
// <number, string> |
// <string, string> |
// <boolean, string>

// 결과값 union
// number |
// never | 
// boolean

// union 타입에 never가 있으면 never(공집합) 타입은 사라짐
// 최종 결과 => A는 number | boolean 타입이 된다

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

/**
 * 분산 방지 방법
 */
type unExclude<T> = [T] extends [number] ? string : number;
let varC : unExclude<number | string>;
// => varC는 number만 타입이 할당된다