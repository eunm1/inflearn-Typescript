/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
    name:string;
    age : number;
}

//value => number인 경우 return .toFixed()
//value => string인 경우 return .toUpperCase()
//value => Date인 경우 .getDate()
//value => Person인 경우 'name은 age입니다'
function func(value: number | string | Date | null | Person){

    value;
    // value.toFixed() //오류 발생
    // value.toUpperCase() //오류 발생

    //타입 좁히기
    // `typeof`, `instanceof`, `in` 연산자는 런타임에 타입을 좁히는 데 사용돼요.
    // 리터럴 타입 자체는 타입 좁히기 방법이 아닌 타입의 한 종류입니다.
    if(typeof value === "number"){
        console.log(value.toFixed())
        return value.toFixed()
    }else if(typeof value === "string"){
        console.log(value.toUpperCase())
        return value.toUpperCase()
    }else if(value instanceof Date){
        console.log(value.getDate())
    }else if(value && "age" in value){ //value값이 있고 value에 age가 있는 경우
        console.log(`${value.name}은 ${value.age}살 입니다`)
    }else if(typeof value === 'object'){ //null or Date or Person 가 올수 있다
        // console.log(value.getDate())
    }


}