/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 * 교집합이 없는 집합관계를 서로소라고 한다
 */

type Admin = {
    tag: 'ADMIN'; //tag 타입을 ADMIN으로 만듬
    name: string;
    kickCount: number;
};

type Member = {
    tag: 'MEMBER';
    name: string;
    point: number;
};

type Guest = {
    tag: 'GUEST';
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;
//tag로 인해 각 type이 서로소 관계가 된다(교집합이 없다)
//tag의 타입이 ADMIN이면서 MEMBER인 타입이 만들어 질 수 없다

//Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다
//Member -> {name}님 현재까지 {point} 모았습니다
//Guest -> {name}님 현재까지 {visitCount}번 방문했습니다
function login(user:User){
    //방법1
    switch(user.tag){
        case 'ADMIN':
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
            break;
        case 'MEMBER':
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
            break;
        case 'GUEST':
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다`)
            break;
    }

    //방법2
    if(user.tag == 'ADMIN'){
        //admin 타입
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
    }else if(user.tag == 'MEMBER'){
        //Member
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
    }else{
        //Guest
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다`)
    }

    // 비교적 직관적이지 않은 조건문
    if('kickCount' in user){
        //admin 타입
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
    }else if('point' in user){
        //Member
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
    }else{
        //Guest
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다`)
    }
}

/**
 * 복습겸 추가 사례
 */

// 비동기 작업의 결과를 처리하는 객체

/* 데이터 좁히기가 안되는 사례
type AsyncTask = {
    state : 'LOADING' | 'FAILED' | 'SUCCESS';
    error?:{
        msg:string;
    };
    response?:{
        data: string
    }
}

const loading:AsyncTask = {
    state: "LOADING",
}

const failed:AsyncTask = {
    state: "FAILED",
    error:{
        msg: "오류 발생..."
    }
}

const success:AsyncTask = {
    state: "SUCCESS",
    response: {
        data : "value~~"
    }
}
*/

/* 타입을 서로소상태로 만들고 타입을 좁힌 사례 */
type loading = {
    state: "LOADING",
}

type failed = {
    state: "FAILED",
    error:{
        msg: "오류 발생..."
    }
}

type success = {
    state: "SUCCESS",
    response: {
        data : "value~~"
    }
}

type AsyncTask = loading | failed | success

function processResult(task:AsyncTask){
    switch(task.state){
        case "LOADING":
            console.log("로딩중")
            break;
        case "FAILED":
            console.log(`에러발생 : ${task.error.msg}`)
            break;
        case "SUCCESS":
            console.log(`에러발생 : ${task.response.data}`)
            break;
    }
}