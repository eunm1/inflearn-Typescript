/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합과 교집합의 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */
//union의 개수 한계는 없다
let a : string | number | boolean;
a = `1`;
a = 1;

let arr : (number | string | boolean)[] = [1, 'tt', true];

type Dog = {
    name: string;
    color : string;
}

type Person = {
    name:string;
    lang : string;
}

type Union1 = Dog | Person;
//Union1은 **"최소한 Dog이거나, 최소한 Person이어야 한다"**는 조건문과 같습니다.
// Dog의 원소를 갖거나 Person의 원소를 가지면 true

let union1: Union1 = { //Dog 타입
    name: "",
    color : ""
}

let union2: Union1 = { //Person 타입
    name: "",
    lang : ""
}

let union3: Union1 = {//Dog와 Person의 교집합
    name: "",
    color : "",
    lang : ""
}

// name 프로퍼티만 있는 집합은 Dog와 Person에 없기 때문에 세팅이 불가능하다
// 속성의 원소의 공통점이 아니라 각 타입이 하나의 속성이 되는 원리
// let union4: Union1 ={
//     name: ''
// }

/**
 * 2. 교집합 타입 - intersection 타입
 */

let variable : number & string; //number와 string의 교집합은 없기 때문에 never로 만들어짐

type Intersection = Dog & Person; //name만 있는 타입
//Dog이면서 Person이어야 한다
//Dog의 원소와 Person의 원소 모두를 가져야 true
let intersection: Intersection = {//Dog와 Person의 교집합
    name: "",
    color : "",
    lang : ""
}

// | (OR): "이거 아니면 저거! 하나만 제대로 갖춰도 오케이!" (데이터의 허용 범위가 넓어짐)
// & (AND): "이것도 있고 저것도 있어야 해! 다 가져와!" (데이터의 조건이 빡빡해짐)

// => 수학적 집합개념이 아닌 프로그래밍적 집합개념이다
// => 타입 자체가 하나의 원소가 된다