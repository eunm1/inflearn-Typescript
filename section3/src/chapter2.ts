/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // up casting

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가
 */

//객체 타입
type Animal ={
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

//객체
let animal: Animal = {
    name :"기린",
    color: 'yellow'
}

let dog: Dog  = {
    name: "돌돌이",
    color: "white",
    breed: "진도"
}

animal = dog; // up casting Animal 타입이 슈퍼타입이 되고 god가 서브타입이 된다
// ** 추가 프로퍼티가 있는 dog 타입이 조건이 더 상세하기 때문

// dog = animal;

/**
 * 초과 프로퍼티 검사
 */

type Book = {
    name: string;
    price : number;
}

type ProgrammingBook = {
    name: string;
    price : number;
    skill : string;
}

let book: Book;
let programmingBook : ProgrammingBook = {
    name: "test",
    price: 3000,
    skill: "typescript"
}

let book2: Book = {
    name: "test",
    price: 3000,
    // skill: "typescript" //초과 프로퍼티 검사해서 걸러짐
}

let book3 : Book = programmingBook;

function func(book: Book){}
func({
    name: "test",
    price: 3000,
    // skill: "typescript" //초과 프로퍼티 검사해서 걸러짐
})
func(programmingBook) // 변수(programmingBook)에 저장후 인수(book)로 변수를 전달할 수 있다