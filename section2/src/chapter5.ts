//enum 타입 : 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 특정 값이 무엇을 의미하는지 알수 있다
// enum Role{
//     ADMIN = 0,
//     USER = 1, 
//     GUEST = 2
// }

// 값을 세팅하지 않은 경우 0, 1, 2, ...으로 자동세팅
// enum Role{
//     ADMIN ,
//     USER, 
//     GUEST
// }

// 첫번재 값만 세팅한 경우 10, 11, 12, ...으로 자동 세팅
enum Role{
    ADMIN = 10,
    USER, 
    GUEST
}

// n번재 값만 세팅한 경우 0, 1, 2, ... 10, 11, 12, ...으로 자동 세팅
// enum Role{
//     ADMIN,
//     USER = 10, //숫자형 enum
//     GUEST
// }

enum Language{
    korean = "ko",
    english = "en"

}

const user1 = {
    name : "kim",
    role : Role.ADMIN,
    lang : Language.korean
}

const user2 = {
    name : "lee",
    role : Role.USER,
    lang : Language.english
}

const user3 = {
    name : "park",
    role : Role.GUEST
}

console.log(user1, user2, user3);
