/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는 가
 */

// 기준 1. 반환값이 호환되는 가
type A = () => number;
type B = () => 10;

let a:A = () => 10;
let b:B = () => 10;

a = b;  // b -> a :up casting
// b = a; (불가) => a -> b : 반환값이 down casting

//기준 2. 매개변수가 호환되는 가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {}
let d: D = (value) => {}

// c = d; (불가) d -> c (up casting)
d = c; // c -> d (down casting)

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal)=>{
    console.log(animal.name)
}

let dogFunc = (dog: Dog)=>{
    console.log(dog.name)
    console.log(dog.color)
}

// animalFunc = dogFunc;
// 아래와 같은 오류로 up casting이 불가
// let aniDog = (dog: Animal)=>{
//     console.log(dog.name)
//     console.log(dog.color)
// }

dogFunc = animalFunc;
let aniDog = (ani: Dog)=>{
    console.log(ani.name)
    console.log(ani.color)
}


// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1: Func1 = (a,b) => {};
let func2: Func2 = (a) => {};

func1 = func2;  //매개변수 개수 1 -> 2 *적은 쪽에서 큰 쪽으로 가는 것만 허용
// func2 = func1; (불가) 매개변수 개수 2 -> 1 