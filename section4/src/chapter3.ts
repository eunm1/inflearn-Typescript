/**
 * 함수 오버로딩
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개
 * -> ver2. 매개변수가 3개
 */

//버전들 -> 오버로드 시그니처
//func라는 함수의 버전이 두가지가 있다를 의미하나 구현이 되어있지 않은 상태
// 구현은 => {} 에 대한 내용이다
function func():void;
function func(a: number):void;
function func(a: number, b: number, c: number):void;

// 실제 구현부 -> 구현 시그니처
function func(a?: number, b?: number, c?: number){
    if(typeof a === "number" && typeof b === "number" && typeof c === "number"){
        console.log(a+b+c);
    }else if(typeof a === "number"){
        console.log(a);
    }else{
        console.log("test");
    }
}

func() 
func(1)
func(1,2,3)
