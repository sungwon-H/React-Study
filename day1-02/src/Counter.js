import React, {useState} from 'react';

function Counter(){ // Court 함수 
    
    //기본 값 0으로 만들기
    const [number, setNumber] = useState(0); // 값 초기화 
    /*
        number = 0으로 셋팅 // 기본값이 0이고, setNumber이 변경되면 number값이 변경된다.
        setNumber() : number 변수의 값을 조정    
    */ 
    
    const Plus = () =>{
        console.log('1을 더합니다.');
        /*
            prev(콜백함수) : setState 함수에 파라미터로 함수를 넘겨주면 이전 값을 저장해주는 변수같은 개념 
            
            let prev = 0;
            function setState(callback){
                prev = callback(prev);
        
        
        */ 
        setNumber(prev => prev +1 ); // prev에 값이 저장된다.
    }
    
    
    const Minus = () =>{
        console.log('1을 뺍니다.');
        setNumber(prev => prev -1 );

    }
    
    
    
    return(
        <div>
            <h2>{number}</h2>
            <button onClick={Plus}>1 더하기</button>
            <button onClick={Minus}>1 빼기</button>
        </div>
    )
}

export default Counter;