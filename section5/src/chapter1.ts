/**
 * 인터페이스의 확장(상속)
 */

interface Animal{
    name: string;
    color: string;
}

interface Dog extends Animal{
    // name: string;
    // color: string;
    isBark: boolean;
}

const dog: Dog = {
    name: "test",
    color: "white",
    isBark: true
}

interface Cat extends Animal{
    // name: "hello" // 재정의 시에는 name type의 sub타입으로만 할당가능하다
    isScratch: boolean;
}

const cat: Cat = {
    name: "cat",
    color: "white",
    isScratch: true
}

interface Chicken extends Animal{
    isFly: boolean;
}

//다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch : true
}