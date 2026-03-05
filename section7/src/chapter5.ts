/**
 * Promise 프로미스
 */

//비동기 코드 작성
/**
 * 프로미스(Promise)는 비동기 처리를 목적으로 제공되는 자바스크립트 내장 객체입
니다. 프로미스는 Date 객체처럼 특수한 목적을 위해 다양하게 기능이 추가된 객체
입니다. 프로미스를 이용하면 콜백 함수를 이용한 비동기 처리보다 더 쉽게 비동기
작업을 수행할 수 있습니다.

대기(Pending) 상태: 작업을 아직 완료하지 않음 
성공(Fulfilled) 상태: 작업을 성공적으로 완료함 
실패(Rejected) 상태: 작업이 모종의 이유로 실패함
 */

//비동기 작업의 결과값을 <number> 라고 할당해줘야한다
const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        resolve(29);
        reject('fail')
    },2000);
});

promise.then((response) => {
    console.log(response * 10);
}).catch((err)=>{
    if(typeof err == "string"){
        console.log(err)
    }
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post{
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post>{ //방법1 함수에 반환값 타입 직접 정의
    return new Promise<Post>((resolve, reject)=>{ //방법2 프로미스의 반환값 타입 정의
        setTimeout(()=>{
            resolve({
                id:1,
                title:"게시글 제목",
                content:"게시글 내용"
            })
        },1000);
    })
}

// ** 방법 1을 사용하는 것이 더 좋다

const postRequest = fetchPost();

postRequest.then((post)=>{ //post의 타입이 <Post>로 추론되어 post.id를 사용할 수 있다
    post.id
})