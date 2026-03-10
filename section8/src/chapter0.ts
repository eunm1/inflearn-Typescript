/**
 * 타입 조작하기
 * - 제네릭 <T>
 * - 인덱스드 엑세스 타입
 * - keyof 연산자
 * - Mapped(맵드) 타입
 * - 템플릿 리터럴 타입
 * - 조건부 타입
 */

/**
 * 인덱스드 엑세스 타입
 * 객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
 */

// 1. 인터페이스 or 타입
interface Post{
    title: string;
    content: string;
    author: {
        id:number;
        name: string;
    }
}

function printAuthorInfo(author: Post["author"]){ 
    //특정 프로퍼티의 타입만 추출, [".."] 오직 스트링 리터럴 같은 값만 명시가능
    //Post[Key] , key = "authot"를 따로 변수 선언해서 사용할 수 없다
    console.log(`${author.name} - ${author.id}`);
    const id :Post["author"]["id"] = author.id; // 중첩으로 프로터티의 타입을 가져올 수 있다
    const authorList_one:PostList[number]["author"] = author; // 배열 타입으로 인덱스트 엑세스 타입을 이용할 수 있다
}

const post: Post = {
    title: "content title",
    content: "contents",
    author: {
        id:1,
        name: "kim"
    }
}

printAuthorInfo(post.author);


// 2. 타입 배열
type PostList = {
    title: string;
    content: string;
    author: {
        id:number;
        name: string;
    }
}[];

const postList_one: PostList[number] = { // PostList[number] : 배열 타입으로부터 하나의 요소의 타입만 가져오는 기능
    // PostList[0] 으로 작성해도 동일하다
    //PostList[Key] , key = 0를 따로 변수 선언해서 사용할 수 없다
    title: "content title",
    content: "contents",
    author: {
        id:1,
        name: "kim"
    }
}

printAuthorInfo(postList_one.author);

// 3. 튜플
type Tup = [number, string, boolean];
type Tup0 = Tup[0]
type Tup1 = Tup[1]
type Tup2 = Tup[2]
// type Tup3 = Tup[3] //배열을 넘는 것은 오류!
type TupNum = Tup[number] // Tuple타입 내의 최적의 고통타입으로 타입이 설정된다
//number | string | boolean