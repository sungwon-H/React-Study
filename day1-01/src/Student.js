import React from 'react' // 리액트 문법 시작

function Student(props){ // props를 적으면 값을 전달 받게 함 props = name의 김사과
    return <div style={{color: props.color}}>{/*비구조화 할당 *//*값을 불러다가 찍어준다 */}
    Hello, {props.name}</div> // 한줄만 쓸경우 () 안써도됨 //props.name속성 적으면 김사과 출력


}

Student.defaultProps ={ // 기본값 셋팅
    color : 'pink',
    name : '기본 값'
}
export default Student; //hello불려지고 이 함수가 실행된다.
