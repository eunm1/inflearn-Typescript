/**
 * 타입 추론
 */

//점진적인 타입 스크립트 제공
let a = 10; //알아서 type script가 변수의 타입 추론해서 적용된다
let b = "hello";
//초기값을 기준으로 변수의 타입을 추론한다
let c = {
    id: 1,
    name: "test",
    profile:{
        nickname:"ttteesst"
    },
    urls: ["https:..."]
}

let {id, name, profile} = c;//구조분해 할당시에도 할당한 변수의 타입이 자동으로 세팅
let [one, two, three] = [1, 'hee', true] //순서에 따라서 타입이 자동으로 세팅

function func(msg = "hello"){ //인수의 초기값 기준으로 인수 타입이 자동으로 세팅
    return "hello"; // 반환값을 기준으로 반환 티입이 자동으로 세팅
}

// 특별한 상황
let d; //암묵적 any타입이 됨 *any 타입의 진화
d = 10;
d.toFixed();

d = "test";
d.toUpperCase();
// d.toFixed(); //라인에 따라서 타입이 달라질수 있다(다른 타입에서 쓰는 메서드 사용 불가)

// 명시적 any로 선언하면 e.toFixed 에서 오류가 나지 않으나 런타임시 발생한다
let e : any; 
e = 10;
e.toFixed();

e = "test";
e.toUpperCase();
e.toFixed(); 

//let으로 변수를 선언하면 
let letNum = 1; //number 변수를 갖는다(타입 넓히기)
//const로 변수에 초기값을 할당하면 다른 값은 할당 불가능하고(에러) 초기값의 리터럴 타입으로 추론된다
const num = 10; //const로 선언하면 num은 number 리텨럴 타입으로 추론된다
const str = "hello";
// 할당 불가능한 변수


let arr = [1, "string"] // arr의 타입은 (number|string)[] 이 된다
const arr2 = [1, "string"] 