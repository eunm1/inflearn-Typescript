
/** 타입 변수 응용하기 */

/**
 * 첫번째 사례
 */

// 타입이 다른 인수를 가져오는 경우
function swap<T, U>(a:T, b:U){
// function swap<T>(a:T, b:T){ => T에 string 이 추론되어 오류 발생
    return [b,a]
}

const [a,b] = swap("1",2);

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: T[]){ //T가 []임을 명시
// function returnFirstValue<T>(data: T){ => T가 unknown타입이어서 오류 발생
    return data[0]
}

let num = returnFirstValue([0,1,2]) 
// num : 0

let str = returnFirstValue(["str1", "str2"]);
// str : "str1"

function returnFirstValue2<T>(data: [T, ...unknown[]]){
    // [T, ...unknown[]] 튜플로 선언
    // 첫번째 타입이 T
    // 그 다음 타입이 unknown[] 
    return data[0]
}
let str_num = returnFirstValue2([1, "str1", "str2"]);
// str_num : 1

/**
 * 세번째 사례
 */

// 길이가 존재하는 인수만 반환하도록 하는 함수
function getLength<T extends {length: number}>(data: T){
    // T를 확장한다
    // number타입의 length라는 프로퍼티를 가진 객체의 T(타입)으로 제한한다
    return data.length;
}

let var1 = getLength([1,2,3]);

let var2 = getLength("123123");

let var3 = getLength({length: 10});

// let var4 = getLength(10); //length프로퍼티가 없어서 사용 불가

