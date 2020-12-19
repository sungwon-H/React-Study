const dog = {
    name: '루시'
};
const cuteDog = {
    ...dog, // 스프레드시트 방법 
    age:9
}

const whiteCuteDog = {
    ...cuteDog,
    color:'white'
};

console.log(dog);
console.log(cuteDog);
console.log(whiteCuteDog);


console.log('-------------------------');

const stduent = ['김사과','오렌지','반하나','이메론'];
const addStudent = [...stduent,'홍길동'];
console.log(stduent);
console.log(addStudent);