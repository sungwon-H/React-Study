import React, {useReducer} from 'react'; // 리액트 모듈 사용

function reducer(state, action){ // state, action 값 받아옴
    switch(action.type){ 
        case 'PLUS': // 상태값
            return state +1 
        case 'MINUS':
            return state -1;
        default:
            return state // 원래값 되돌려줌     
    }
}

function Counter(){
    const [number, dispatch] = useReducer(reducer,0); // dispatch는 액션을 발생시키는 함수 plus,minus를 발생 

    const Plus = () => {
        console.log('1을 더합니다.');
        dispatch({type:'PLUS'}); //type 객체 plus를 불러준다.
    }
    const Minus =() =>{ // 호출된 함수 실행
        console.log('1을 뺍니다');
        dispatch({type:'MINUS'});
    }

return(
    <div>
        <h2>{number}</h2>
        <button onClick={Plus}>1 더하기</button>
        <button onClick={Minus}>1 빼기</button> {/*함수를 호출*/ }
    </div>
);
}
export default Counter;