/**
 * 사용자 정의 타입 가드
 */

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;
// | : animal이 최소한 Dog이거나 Cat이거나 Dog/Cat 둘다 여야 한다는 의미

function isDog(animal: Animal): animal is Dog{ //: animal is Dog => 반환값이 true인 경우 Dog타입임을 명시해줘야 타입이 좁혀진다
    // return animal.isBark !== undefined; 
    // => animal 타입이 잘 좁혀지지 않은 상태여서 오류 발생
    // => Dog인지 Cat인지 모르는 데 isBark를 사용
    return (animal as Dog).isBark !== undefined
}

function isCat(animal: Animal): animal is Cat{ 
    return (animal as Cat).isScratch !== undefined
}

function warning(animal: Animal){
    if(isDog(animal)){
        animal;
        console.log("Dog")
    }else if(isCat(animal)){
        animal;
        console.log('Cat')
    }
}

warning({name:"test", isBark:true})
warning({name:"test", isScratch:false})
warning({name:"test", isBark:false, isScratch:true})
