/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

// Exclude 타입 구현해보기
// 아래와 같은 구조임을 인지
type Exclude<T, U> = T extends U ? never : T;
// 분산적 조건부 타입
// 두번 실행
// Exclude<string, boolean> | Exclude<boolean, boolean>

// 결과
// string | never => 최종적으로 string

type A = Exclude<string | boolean, boolean>


/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

// Extract 타입 구현해보기
// 아래와 같은 구조임을 인지
type Extract<T, U> = T extends U ? T : never;
// 분산적 조건부 타입
// 두번 실행
// Exclude<string, boolean> | Exclude<boolean, boolean>

// 결과
// never | boolean => 최종적으로 boolean

type B = Extract<string | boolean, boolean>


/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

 function funcA(){
    return "hello";
 }

 function funcB(){
    return 10;
 }

// ReturnType 타입 구현해보기
// 아래와 같은 구조임을 인지
type ReturnType<T extends (...args : any) => any > = T extends ( ...args:any) => infer R ? R : never
// T : (args)=>any 같은 구조임을 명시
// T 타입이 서브타입이 되도록하는 반환값 R을 추론하라

type ReturnA = ReturnType<typeof funcA>

type ReturnB = ReturnType<typeof funcB>

/** ------ 함수의 타입으로 extends 해보기 ------ */

type ReturnType2<T extends typeof funcA > = T extends ( ...args:any) => infer R ? R : never
type ReturnA_2 = ReturnType2<typeof funcA>
//  type ReturnB_2 = ReturnType2<typeof funcB> // 함수타입이 선언한 타입과 달라서 오류 발생

type ReturnType3<T extends typeof funcB > = T extends ( ...args:any) => infer R ? R : never
// type ReturnA_3 = ReturnType3<typeof funcA> // 함수타입이 선언한 타입과 달라서 오류 발생
type ReturnB_3 = ReturnType3<typeof funcB>
type ReturnB_4 = ReturnType3<() => number>

 

