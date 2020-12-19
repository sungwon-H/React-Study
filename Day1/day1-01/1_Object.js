// 객체 만들기
const dog = {
    name : '도기',
    age : 10,
    weight : 3
};
console.log(`이름 : ${dog.name}`); // 상수 dog 객체의 name 값을 가져온다.
console.log(`나이 : ${dog.age}`);
console.log(`몸무게 : ${dog.weight}`);


console.log('-----------------------------------------------------');




//객체 구조 분해
const Hero = {
    name : 'Captin America',
    age : 105,
    birthday : '1918-07-04',
    weight : 108
} 

function print ({name, age, birthday, weight}){
    console.log(`${name}라는 영웅은 나이가${age}살 이고, 생년월일은${birthday}이고, 몸무게는${weight}kg 입니다.`);

}

print(Hero); // 함수 print는 hero의 객체를 분해해서 호출한다

console.log('--------------------------------------------------------');

const student = {
    a : '김모란',
    b : '이백합',
    c : '민들레'
}
const {a,b,c} = student; // {a,b,c}에 student 객체 값을 저장
console.log(a);
console.log(b);
console.log(c);

console.log('--------------------------------------------------------');

const flowers = ['진달래','데이지','무궁화'] // 배열의 인덱스 번호 flowers[0] = 진달래 ....
const [Jin, De, Moo] = flowers; //  index 0번은 진달래 1번 데이지 2번 무궁화

console.log(Jin);
console.log(De);
console.log(Moo);