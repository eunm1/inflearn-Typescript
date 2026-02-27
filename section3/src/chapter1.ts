/**
 * Unknown 타입 : 모든 값의 슈퍼 타입
 */

function unknownExam(){
    //up casting
    // unknown 타입에는 모든 타입이 들어갈 수 있다
    // number -> unknown
    let a: unknown = 1;
    let b: unknown = "heel";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    //down casting 불가
    //다른 타입은 unknown 타입이 될수 없다
    // unknown -> number (x)
    let f: unknown;
    // let g: number = f;
    // let g: string = f;
    // let g: boolean = f;
}


/**
 * Never 타입
 */

function neverExam(){

    // 공집합과 동일 : 아무것도 반환 할 수 없다*빈값조차 반환 불가
    function neverFunc(): never{
        while(true){}
    }

    //never 타입은 모든 타입의 서브 타입이기 때문에 up casting 가능
    // never -> number
    let num1: number = neverFunc()
    let num2: string = neverFunc()
    let num3: boolean = neverFunc()

    //down casting 불가
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam(){
    function voidFunc(): void{
        console.log('hi');
        return undefined;
    }
    //undefined -> void (up casting)
    //개층도상 void의 서브타입
    let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam(){
    //계층구조를 무시하는 특별한 타입
    let unknownVar: unknown;
    let anyVar : any;
    let undefinedVar : undefined;
    let neverVar : never;

    // unknown -> any (down casting 가능)
    anyVar = unknownVar;
    
    // any -> undefined (down casting 가능)
    undefinedVar = anyVar;

    // => 뭐든게 될 수 있기 때문에 사용을 권장하지 않음

    // 다만, never 는 any가 될 수 없다
    // neverVar = anyVar;
}
