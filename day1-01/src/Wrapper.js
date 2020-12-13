import React from 'react'; // 리액트 문법 사용

function Wrapper({children}){//컴퍼넌트를 생성하고 칠드런을 넣으면 칠드런이 Wrapper사이에 넣는 값이 된다
    const style={
        border : '2px solid gold',
        padding : '16px'
    }
    return(
    <div style={style}>
        {children}
    </div>
    )
}
export default Wrapper; // 외부에서 사용