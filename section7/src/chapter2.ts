/**
 * map 메서드 custom으로 만들기
 */

const arr = [1,2,3];
const newArr = arr.map((it) => it * 2);
//it의 타입이 number로 자동 추론됨\

function map2<T>(arr:T[], callback:(item:T) => T ){
    let result = [];
    for(let i = 0; i < arr.length ; i++){
        result.push(callback(arr[i]))
    }

    return result
}

map2(arr, (it) => it * 2)
map2(["hi", "hello"], (it)=>it.toUpperCase())

function map3<T, U>(arr:T[], callback:(item:T) => U ){
    let result = [];
    for(let i = 0; i < arr.length ; i++){
        result.push(callback(arr[i]))
    }

    return result
}
map3(["hi", "hello"], (it)=>parseInt(it)) // 인수 T : string, 반환값 U : number로 추론됨


/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((it)=>console.log(it))

function forEach<T>(arr:T[], callback:(item:T)=> void){
    for(let i = 0; i < arr.length ; i++){
        callback(arr[i])
    }
}

forEach(arr2, (it)=>{
    console.log(it.toFixed())
})

forEach(["123","1212"], (it)=>{it;})