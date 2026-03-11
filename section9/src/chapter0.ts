/**
 * 조건부 타입
 */

type a = number extends string ? string : number;
// 조건 :  A 는 number타입이 string 타입을 확장하는 타입인가
// number는 string 타입의 서브 타입이 아니다
// 참인 경우 string 거짓인 경우 number 타입을 반환한다
// 위 식은 무조건 false로 number가 나온다

type ObjA = {
    a : Number
}

type ObjB = {
    a : Number
    b : Number
}

type B = ObjB extends ObjA ? number : string;
// ObjB 는 ObjA를 확장하는 가 
// => 동일한 프로퍼티를 가지고 있고 ObjB 는 다른 프로퍼티를 가지고 있다
// => ObjA는 super 타입이 된다
// 위 식은 number 타입이 나온다

/**
 * 제네릭과 조건부 타입
 */

// T가 number 면 string 타입을 반환
// T가 string 이면 number타입을 반환하는 조건식을 만들어 보자
type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>
let varB : StringNumberSwitch<string>
let varC : StringNumberSwitch<0>
let varD : StringNumberSwitch<"">


//오버로드 시그니처 활용 => 함수의 버전이 두가지임을 작성
// 함수 오버로딩은 입력 타입별로 정확한 함수 시그니처를 여러 개 정의
// => 타입스크립트가 더 정확하게 타입을 추론하고 안전성을 확보
function removeSpaces<T>(text : T): T extends string ? string : undefined;
function removeSpaces(text : any){
    if(typeof text == "string"){
        return text.replaceAll(" ", "")
    }else{
        return undefined;
    }
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);


//`T extends U ? A : B`
// => 조건부 타입에서 `extends`는 앞의 타입(T)이 뒤의 타입(U)에 할당 가능한 서브타입인지 확인하는 데 사용