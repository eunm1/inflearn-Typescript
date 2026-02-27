/**
 * 타입 단언
 */

type Person = {
    name:string;
    age : number;
}

// let person = {} //타입 추론이 {}가 되어버린다
// let person: Person = {} //초기값이 없어서 오류 발생
// let person: any = {} // any타입은 권장하지 않음

// 초기값을 세팅하지 않고 이후에 데이터를 세팅하는 경우
let person = {} as Person; //person변수의 타입이 Person으로 추론하라고 명시
person.name="kim"
person.age=27

type Dog = {
    name: string;
    color: string;
}

let dog1 : Dog = {
    name: "멍",
    color: "black",
    // breed : "진도" // Dog타입에 breed가 없어 오류 발생
}

let dog2 = {
    name: "멍",
    color: "black",
    breed : "진도"
} as Dog; //해당 객체의 타입을 Dog로 단언하도록 명시

/**
 * 타입 단언의 규칙
 * 값 as 단언 (단언식)
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 한다
 */

let num1 = 10 as never; // 10(number)가 never의 슈퍼타입
let num2 = 10 as unknown; // 10(number)가 unknown의 서브타입

// let num3 = 10 as string; //10(number)와 string은 관계가 없다
let num3 = 10 as unknown as string; //다중 단언을 하면 오류가 해결되긴 하나 안전하지 않다

/**
 * const 단언
 */

let num4 = 10 as const; //읽기전용이 된다
let cat = {
    name: "치즈",
    color: "gray"
} as const; //const 단언을 이용하면 읽기 전용이 된다


/**
 * Non Null 단언
 * 어떤 값이 null이 아니라고 단언
 */

type Post = {
    title: string;
    author?: string;
}

let post: Post={
    title: "post1",
    author: "kim"
}

// const len : number = post.author?.length; 
// post.author?.length의 타입은 undefiend | number이기 때문에 number에 할당 불가
// post.author가 있으면 length를 가져오고 없으면 undefined가 되기 때문

const len : number = post.author!.length; //post.author값이 무조건 존재함을 단언
// !(non Null) 를 작성하면 값이 무조건 있다고 알려주는 셈
// 진짜 값이 있을 경우에만 사용해야한다

//단언 문법은 조심히 사용할 것


