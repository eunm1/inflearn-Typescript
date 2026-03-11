/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체타입트로부터 특정 프로퍼티만 딱 골라내는 타입
 */
interface Post { 
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// Pick 타입 구현해보기
// 아래와 같은 구조임을 인지
// K extends keyof T : K는 T의 서브타입만 들어올수 있음을 명시
type Pick<T, K extends keyof T> = {
    // K extends 'title' | 'tags' | 'content' | thumbnailURL
    // K는 객체의 프로퍼티 키만 들어갈 수 있다는 조건을 만들어 주는 것
    [key in K]: T[key];
}

const legacyPost: Pick<Post, "title" | "content" > = {
    title: "history title",
    content : "history content"
}

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로 부터 특정 프로퍼티를 제거하는 타입
 */

// Omit 타입 구현해보기
// 아래와 같은 구조임을 인지
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// T : Post, K = "title"
// Pick<Post, Exclude<'title' | 'contnet' | 'tags' | 'thumbnailURL', "title">>
// => Exclude : Post 타입에서 특정 타입만 제거한다
// Pick<Post, 'contnet' | 'tags' | 'thumbnailURL'> 
// => Pick : post에서 특정 타입만 빼낸다

const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags : [],
    thumbnailURL: ""
}

/**
 * Record<K, V>
 * 객체타입을 정의할때 인덱스 시그니처 처럼 유연하지만 제한적인 객체타입을 정의할때 사용
 */

type ThumbnailLegacy = {
    large: {
        url:string
    };
    medium: {
        url:string
    };
    smail: {
        url:string
    }
}

// 위와 아래가 동일하다
// Recode 타입을 정의하면 쉽게 타입을 정의하고 확장할 수 있다

type Thumbnail = Record<"large" | "medium" |"small", {url:string}>;

// Record 타입 구현해보기
// 아래와 같은 구조임을 인지
type Recode<K extends keyof any, V> = {
    // K extends keyof any 에서 K는 어떤 객체(any)에서 추출해놓은 union key 타입이라는 것을 명시
    [key in K]: V;
}