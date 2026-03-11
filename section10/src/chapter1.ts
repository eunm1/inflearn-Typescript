/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post { 
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// Partial 타입 구현해보기
// 아래와 같은 구조임을 인지
// type Partial<T> = {
//     [key in keyof T]?: T[key]
// }

const draft: Partial<Post> = {
    title: "title~",
    content: "first"
}

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

// Required 타입 구현해보기
// 아래와 같은 구조임을 인지
// -? : 모든 프로퍼티의 ?를 빼겠다는 의미 => 필수 프로퍼티가 됨
type Required<T> = {
    [key in keyof T]-?: T[key]
}

const withThumnailPost : Required<Post> = {
    title: "title~",
    tags: ['1','2'],
    content: "first",
    thumbnailURL: "tttt" //Post에서 선택적 프로퍼티지만 주석시 오류 발생됨
}

/**
 * Readonly<T>
 * -> 읽기 전용, 수정 불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

// Readonly 타입 구현해보기
// 아래와 같은 구조임을 인지
type Readonly<T> = {
    readonly [key in keyof T]: T[key]
}

const readonlyPostL: Readonly<Post> = {
    title: "title~",
    tags: ['1','2'],
    content: "first",
}

// readonlyPostL.content = ""; // 읽기전용이라서 오류 발생