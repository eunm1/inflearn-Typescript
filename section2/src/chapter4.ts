// 타입 별칭
type User = {
    id:number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
}
let user: User={
    id:1,
    name:"kim",
    nickname:"spring",
    birth: "2014.12.12",
    bio: "hello"
}
let user2: User={
    id:2,
    name:"lee",
    nickname:"summer",
    birth: "2013.13.13",
    bio: "hello !!"
}

// 인덱스 시그니처
type CountryCodes = {
    [key: string] : string; //key의 타입 string, 해당 키의 값의 타입을 string으로 지정한다
    //새로운 key 가 들어와고 일일히 선언하지 않아도 되지만 string: string의 형식은 고정된다
}

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom:"uk"
}

let countryCodes2: CountryCodes = {} 
//빈 객체에 오류가 발생하지 않는다.
//형식 오류를 판단할 값이 없기 때문

type CountryCodes2 = {
    [key: string] : string; 
    // phone: number => 사용 불가 : 인덱스 타입과 형식 불일치하여 오류 발생
}
