/**
 * 제네릭 클래스
 */

class List<T> {
    constructor(private list : T[]){}

    push(data:T){
        this.list.push(data)
    }

    pop(){
        return this.list.pop()
    }

    print(){
        console.log(this.list)
        return this.list
    }
}
// const numberList = new List<number>([1,2,3]); // 알아서 추론되서 명시하지 않아도 된다
const numberList = new List([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print()

const stringList = new List(["q","2"]);
stringList.pop();
stringList.push("4");
stringList.print()