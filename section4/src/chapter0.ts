/**
 * 함수 타입 정의
 */

// 함수란
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의 결과값을 반환하는지 이야기]
function func(a:number, b:number):number{
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a:number, b:number):number => a+b;

/**
 * 함수의 매개변수
 */

function introduce(name = "kim", tall?:number){
    // => 선택적 매개변수는 필수 매개변수보다 앞에 올수 없다
    console.log(`name : ${name}`);
    if(typeof tall == 'number'){
        console.log(`tall : ${tall + 10}`);
    }
}

introduce('kim', 1);
introduce('kim');

function getSum(...rest:number[]){
    let sum = 0;
    rest.forEach((it)=>(sum+= it))
    return sum
}

function getSum2(...rest:[number,number,number]){
    let sum = 0;
    rest.forEach((it)=>(sum+= it))
    return sum
}

getSum(1,2,3);
getSum(1,2,3,4,5)

