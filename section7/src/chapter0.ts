/**
 * 제네릭 Generic
 */

// 제네릭 함수를 이용하면 *인수에 따라서 반환값의 타입을 가변적으로 적용할 수 있다
// 모든 타입이 두루두루 쓸수 있는 범용적인 함수
function func<T>(value: T):T{ // <T> : 타입 변수
    return value;
}

let num = func(10)
let bool = func(true)
let str = func("str")

// 각 변수의 타입이 인수와 동일하게 추론된다

let arr1 = func([1,2,3]) //number[]로 추론됨

//제네릭 타입을 명시적으로 사용하는 방법
// 타입 단언을 이용해 반환값의 정보를 튜플 타입으로 만들 수 있다
let arr2 = func([1,2,3] as [number,number, number]); // [number,number, number]로 추론됨

// ** <T> 값을 명시하여 반환 과 인수타입을 지정할 수 있다
let arr3 = func<[number,number, number]>([1,2,3]); // [number,number, number]로 추론됨
