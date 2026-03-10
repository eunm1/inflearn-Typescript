/**
 * 제너럴로 재귀이용해서 타입 생성하기
 * 제미나이 이용
 * 이 "타입 함수"는 아주 강력하지만, TypeScript 컴파일러가 과부하 걸리는 것을 막기 위해 재귀 횟수 제한을 걸어두었습니다.
 */

// function Enumerate(N, Acc = []) (JS) 
// type Enumerate<N, Acc = []> (TS)

// if (Acc.length === N) (JS) 
// Acc['length'] extends N ? ... (TS)

// return Enumerate(N, [...Acc, Acc.length]) (JS) 
// : Enumerate<N, [...Acc, Acc['length']]> (TS)

// return Acc (JS) == 
// Acc[number] (TS)

type Enumerate<N extends number, Acc extends number[] = []> = 
  Acc['length'] extends N // : **"지금 배열에 담긴 숫자의 개수가 우리가 목표로 한 숫자 N과 같은가?"**
    ? Acc[number] 
    : Enumerate<N, [...Acc, Acc['length']]>;

    /* Acc,  Acc[length], extend 3 */ //N을 3으로 설정한 경우

    // [],  0,   false
    // [0],  1,   false
    // [0, 1],  2,   false
    // [0, 1, 2],  3,   true


// 0부터 10까지 (11을 넣어야 10까지 생성됨)
type IntRange = Enumerate<11>; 
// 결과: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10