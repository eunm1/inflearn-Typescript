/**
 * 인터페이스와 클래스
 */

interface CharacterInterface{
    name: string;
    moveSpeed: number;
    move():void;
}

//interface는 class의 설계도 역할을 수행
// 클래스가 interface를 토대로 구현한다
class Character implements CharacterInterface{ // implements : 구현하다라는 의미

    constructor(public name:string, public moveSpeed:number, private extra: string){}
    //interface로 가져온 필드구조는 무조건 public 제어자로 생성되어야한다

    move():void{
        console.log(`${this.moveSpeed} 속도로 이동`)
    }
}

// 라이브러리나 정교한 작업을 하지 않는 이상 interface를 사용하여 class를 구현하는 경우는 드물다