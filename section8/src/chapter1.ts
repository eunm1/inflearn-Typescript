/**
 * keyof 연산자
 * 특정 객체 타입으로부터 프로퍼티 키들을 모두 스트링 리터럴 유니온 타입으로 추출하는 연산자
 */

interface Person { 
    name: string;
    age: number
}

function getPropertyKey(person:Person, key: keyof Person){
    //keyof Person, Person타입으로 부터 모든 프로퍼티의 키를 union( | ) 타입을 추출한다
    // keyof [타입]
    return person[key]
}

const person: Person = {
    name: "kim",
    age: 31
}

getPropertyKey(person, "name")

/**
 * typeof 연산자
 */

type Person_2 = typeof person_2; // 특정 변수의 타입정보를 가져와서 세팅한다
function getPropertyKey_2(person:Person, key: keyof typeof person_2){
    //keyof typeof person_2 , person_2의 타입정보를 가져와서 union 타입으로 만드는 중첩을 이용할 수 있다
    // keyof [타입]
    return person[key]
}

const person_2 = {
    name: "kim",
    age: 31
}

getPropertyKey_2(person_2, "name")

if(typeof person === "object") {} // 특정 변수의 타입을 알아내는 용도로도 쓰인다