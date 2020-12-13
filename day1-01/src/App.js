import React from 'react'; // 리액트 문법 사용



function App() {
    
  
    const text = "안녕하세요 리액트 공부 중입니다."
    const style = {
      backgroundColor : 'gold',
      fontSize : 30,
      color : 'purple',
      padding : '1em'
    } // CSS 적용

  return ( // 화면에 출력되는 부분 
    <>
      
      <div style={style}>{text}</div>
    
    </>
      
  );
}

export default App;
