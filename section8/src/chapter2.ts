/**
 * 맵트 연산자
 * 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 연산자
 */

interface User { 
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id" | "name" | "age"]?:User[key];
    // [key 설정] : [value 설정]
    // ? 를 추가하게 되면 모든 프로퍼티가 다 선택적 프로퍼티가 될 수 있다
    // 중복 타입이지만 선택적 프로퍼티를 만들 때 사용한다
    // 인터페이스에서는 사용 불가능하다(인터페이스에서 프로퍼티 생성시 맵드를 사용할 수 없다)
    // => 무조건 위와같이 타입 별칭으로만 사용해야한다
    // {
    //     id : User["id"]    
    //     name : User["name"]    
    //     age : User["age"]    
    // }
}

type BooleanUser = {
    [key in keyof User]?:User[key];
}

type ReadonlyUser = {
    readonly [key in keyof User]?:User[key];
}


//한명의 유저 정보를 불러오는 기능
function fetchUser(): BooleanUser{
    return {
        id:1,
        name:"kim",
        age:31
    }
}

//한명의 유저 정보를 일부만 수정하는 기능
function updateUser(user: PartialUser){
    // ... 수정하는 기능
}

updateUser({
    // id:1,
    // name:"kim",
    age:29
})