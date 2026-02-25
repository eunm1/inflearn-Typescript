//object

//1. 객체 리터럴 타입 : 객체의 값에  type을 정의
// 구조를 기준으로 타입 설정 : 구조적 타입 시스템 (property Type system)
// 인라인 타입 선언
let user: {
    id: number,
    name?: string; //optional property : 변수에 ?를 붙여서 객체에 해당 프로퍼티가 없어도 되게 함
    readonly apiKey?: string; //읽기 전용 프로퍼티, 초기 세팅 이후에 새로 할당 불가
} = {
    id: 1,
    name : "kim eun mi"
};

user = {
    id: 2
}

//2. 인터페이스 사용하여 객체의 프로퍼티에 타입 선언
interface User{
    id: number,
    name: string
}
let user2: User = {
    id: 1,
    name : "kim eun mi"
};

//3 타입 별칭 사용
type userType = {
    id: number;
    name: string;
}
let user3 : userType = {
    id: 1,
    name : "kim eun mi"
};
type userType2 = {
    check: boolean;
    name: string;
}
let user4 : userType | userType2 = {
    check: true,
    name : "kim eun mi"
};